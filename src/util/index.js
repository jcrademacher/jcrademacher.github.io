const projectModules = import.meta.glob('../pages/projects/project-*.jsx', { eager: true });
const tripModules = import.meta.glob('../pages/trips/trip-*.jsx', { eager: true });
const researchModules = import.meta.glob('../pages/research/research-*.jsx', { eager: true });

function filterValidModules(modules) {
    return Object.values(modules).filter(
        (mod) => mod?.default && mod?.metadata && mod?.TableOfContents
    );
}

export function importProjectModules() {
    return filterValidModules(projectModules);
}

export function importTripModules() {
    return filterValidModules(tripModules);
}

export function importResearchModules() {
    return filterValidModules(researchModules);
}

export function importModules(name) {
    if (name === "Projects") return importProjectModules();
    if (name === "Trips") return importTripModules();
    if (name === "Research") return importResearchModules();
}
