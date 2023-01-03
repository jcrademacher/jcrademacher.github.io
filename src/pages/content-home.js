import React from 'react';
import {
    Route, Switch
} from "react-router-dom"
import '../sass/content.scss'
import { importModules } from '../util'
import { ContentListItem } from '../components/content-list'
import Page404 from './404.js'

var path = require('path');

class ContentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: "priority",
            sortOrder: "descending",
            activeProject: null,
            modules: []
        }
    }

    componentDidMount() {
        //console.log("mounted");
        let { sortBy, sortOrder } = this.state;
        let order = sortOrder == "ascending" ? 1 : -1;
        let modules = importModules(this.props.name);

        if(this.props.name === "Projects") {
            if(sortBy == "date") {
                modules.sort((a,b) => order*(a.metadata.date.isSameOrAfter(b.metadata.date) ? 1 : -1));
            }
            else if(sortBy == "priority") {
                modules.sort((a,b) => order*(a.metadata.priority - b.metadata.priority));
            }
            else {
                modules.sort((a,b) => order*a.metadata.title.localeCompare(b.metadata.title));
            }
        }
        else if(this.props.name === "Trips") {
            modules.sort((a,b) => order*(a.metadata.date.isSameOrAfter(b.metadata.date) ? 1 : -1));
        }

        this.setState({ modules: modules });
    }

    

    render() {

        return  (
            <div id="projects-container">
                <Switch>
                    {this.state.modules.map((Module) => {

                        return <Route exact key={Module.metadata.route} path={path.join(`/${this.props.name}`, Module.metadata.route)}>
                            <h1>{Module.metadata.title}</h1>
                            <img className="header" src={Module.metadata.thumbnail}/>
                            <h3>{Module.metadata.subtitle}</h3>
                            <div className="metadata">{Module.metadata.tags.join(", ")}
                            <br/>{Module.metadata.date && Module.metadata.date.format("MMMM Do, YYYY")}</div>
                            <br/>
                                <Module.TableOfContents/>
                            <br/>
                            <div className="separator"/>
                            <br/>
                            <div>
                                <Module.default/>
                            </div>
                        </Route> 
                    }
                        
                    )}
                    <Route exact path={`/${this.props.name}`}>
                        <h1>{this.props.name}</h1>
                        <div className="separator"/>
                        <br/>
                        <div id="projects-list-container">
                            {this.state.modules.map((Module) => 
                                <ContentListItem 
                                    key={Module.metadata.route} 
                                    mobile={this.props.mobile} 
                                    to={path.join(this.props.name, Module.metadata.route)} 
                                    {...Module.metadata}
                                />
                            )}
                        </div>
                    </Route>
                    <Route>
                        <Page404/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default ContentList;