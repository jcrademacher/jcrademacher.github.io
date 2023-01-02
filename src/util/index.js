const requireProjects = require.context('../pages/projects', false, /project-.+\.js/);
const requireTrips = require.context('../pages/trips', false, /trip-.+\.js/);

export function importProjectModules() {
    return requireProjects.keys().filter((item) => {
        let module = requireProjects(item);

        if(module && module.default && module.metadata && module.TableOfContents)
            return module;
    })
    .map(requireProjects);
}

export function importTripModules() {
    return requireTrips.keys().filter((item) => {
        let module = requireTrips(item);

        if(module && module.default && module.metadata && module.TableOfContents)
            return module;
    })
    .map(requireTrips);
}