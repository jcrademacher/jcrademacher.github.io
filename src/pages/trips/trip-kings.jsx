import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import headerImage from '../../media/kings/kings_thumb.jpeg'
import thumbnail from '../../media/kings/kings_thumb.jpeg?thumbnail'
import moment from 'moment';

export default function KingsPeak() {
    return (
        <div>
            This page is still under construction, please check back soon!
        </div>
    );
}

export function TableOfContents() {
    return (
        <TableOfContentsWrapper>

        </TableOfContentsWrapper>
    );
}

export const metadata = {
    title: "Kings Peak - High Uintas Wilderness"
    , location: "Duchesne County, Utah"
    , subtitle: "Kings Peak is the highest peak in Utah, just below 14k feet. We started at Henry's Fork trailhead and hiked up along Henry's Fork river \
                before having to traverse a passe to reach the base of the peak."
    , date: moment("20200807")
    , thumbnail
    , headerImage
    , route: "/kings-peak"
    , tags: []
}
