import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

const CACHE_DIR = 'node_modules/.cache/thumbnails';
const MAX_DIMENSION = 600;
const JPEG_QUALITY = 80;
const SERVE_PREFIX = '/@thumbnails/';

function contentHash(filePath) {
    const content = fs.readFileSync(filePath);
    return createHash('md5').update(content).digest('hex').slice(0, 12);
}

function getCachePath(filePath) {
    const hash = contentHash(filePath);
    const base = path.basename(filePath, path.extname(filePath));
    return path.join(CACHE_DIR, `${base}-${hash}.jpg`);
}

async function generateThumbnail(filePath) {
    const cachePath = getCachePath(filePath);

    if (fs.existsSync(cachePath)) {
        return cachePath;
    }

    fs.mkdirSync(CACHE_DIR, { recursive: true });

    await sharp(filePath)
        .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside' })
        .jpeg({ quality: JPEG_QUALITY })
        .toFile(cachePath);

    return cachePath;
}

const THUMBNAIL_SUFFIX = '?thumbnail';
const IMAGE_RE = /\.(png|jpe?g|gif|webp|tiff|avif)$/i;

export default function thumbnailPlugin() {
    let isBuild = false;

    return {
        name: 'vite-plugin-thumbnail',
        enforce: 'pre',

        configResolved(config) {
            isBuild = config.command === 'build';
        },

        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (!req.url?.startsWith(SERVE_PREFIX)) return next();

                const filename = req.url.slice(SERVE_PREFIX.length);
                const filePath = path.join(CACHE_DIR, filename);

                if (!fs.existsSync(filePath)) {
                    res.statusCode = 404;
                    res.end();
                    return;
                }

                res.setHeader('Content-Type', 'image/jpeg');
                res.setHeader('Cache-Control', 'max-age=31536000, immutable');
                fs.createReadStream(filePath).pipe(res);
            });
        },

        async resolveId(source, importer) {
            if (!source.endsWith(THUMBNAIL_SUFFIX)) return null;

            const rawPath = source.slice(0, -THUMBNAIL_SUFFIX.length);
            const resolved = await this.resolve(rawPath, importer, { skipSelf: true });
            if (!resolved) return null;

            return `\0thumbnail:${resolved.id}`;
        },

        async load(id) {
            if (!id.startsWith('\0thumbnail:')) return null;

            const filePath = id.slice('\0thumbnail:'.length);
            if (!IMAGE_RE.test(filePath)) return null;

            const cachePath = await generateThumbnail(filePath);

            if (isBuild) {
                const ref = this.emitFile({
                    type: 'asset',
                    name: path.basename(cachePath),
                    source: fs.readFileSync(cachePath),
                });
                return `export default import.meta.ROLLUP_FILE_URL_${ref};`;
            }

            const url = SERVE_PREFIX + path.basename(cachePath);
            return `export default ${JSON.stringify(url)};`;
        },
    };
}
