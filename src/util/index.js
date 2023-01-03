const requireProjects = require.context('../pages/projects', false, /project-.+\.js/);
const requireTrips = require.context('../pages/trips', false, /trip-.+\.js/);
const requireResearch = require.context('../pages/research', false, /research-.+\.js/);

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

export function importResearchModules() {
    return requireResearch.keys().filter((item) => {
        let module = requireResearch(item);

        if(module && module.default && module.metadata && module.TableOfContents)
            return module;
    })
    .map(requireResearch);
}

export function importModules(name) {
    if(name === "Projects") {
        return importProjectModules();
    }
    else if(name === "Trips") {
        return importTripModules();
    }
    else if(name == "Research") {
        return importResearchModules();
    }
}