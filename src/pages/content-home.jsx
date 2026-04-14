import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom'
import '../sass/content.scss'
import { importModules } from '../util/index.js'
import { ContentListItem } from '../components/content-list.jsx'
import Page404 from './404.jsx'

function ContentList({ name, mobile }) {
    const modules = useMemo(() => {
        let mods = importModules(name) || [];
        const order = -1; // descending

        mods.sort((a, b) => order * (a.metadata.date.isSameOrAfter(b.metadata.date) ? 1 : -1));

        return mods;
    }, [name]);

    const routePrefix = `/${name.toLowerCase()}`;

    return (
        <div id="projects-container">
            <Routes>
                {modules.map((Module) => (
                    <Route
                        key={Module.metadata.route}
                        path={Module.metadata.route.replace(/^\//, '')}
                        element={
                            <>
                                <h1>{Module.metadata.title}</h1>
                                <img className="header" src={Module.metadata.headerImage || Module.metadata.thumbnail}/>
                                <p>{Module.metadata.subtitle}</p>
                                {Module.metadata.doi ? <h3>DOI: <a href={Module.metadata.doi}>{Module.metadata.doi}</a></h3> : null}
                                <div className="metadata">
                                    {Module.metadata.event}
                                    <br/>{Module.metadata.date && Module.metadata.date.format("MMMM Do, YYYY")}
                                    <br/>{Module.metadata.tags.join(", ")}
                                </div>
                                <br/>
                                <Module.TableOfContents/>
                                <br/>
                                <div className="separator"/>
                                <br/>
                                <div>
                                    <Module.default/>
                                    <br/>
                                </div>
                            </>
                        }
                    />
                ))}
                <Route
                    index
                    element={
                        <>
                            <h1>{name}</h1>
                            <div className="separator"/>
                            <br/>
                            <div id="projects-list-container">
                                {modules.map((Module) =>
                                    <ContentListItem
                                        key={Module.metadata.route}
                                        mobile={mobile}
                                        to={`${routePrefix}${Module.metadata.route}`}
                                        {...Module.metadata}
                                    />
                                )}
                            </div>
                        </>
                    }
                />
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default ContentList;
