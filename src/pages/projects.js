import React from 'react';
import {
    Link,
    Route,
    Switch,
    useRouteMatch
} from "react-router-dom";
import { projects } from '../item-content'
import { isElement } from 'react-dom/test-utils';
import '../sass/projects.scss'
import profile from '../media/profile.jpg'

import ListItem from '../components/list-item'

var moment = require('moment');

function ProjectPage() {
    return (
        <div>

        </div>
    );
}

function projectItemMapper(items) {
    return 
}

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: "title",
            sortOrder: "ascending"
        }
    }

    render() {
        var projectsCopy = [...projects];
        let { sortBy, sortOrder } = this.state;

        let order = sortOrder == "ascending" ? 1 : -1;

        if(sortBy == "date") {
            projectsCopy.sort((a,b) => order*(a.date.getTime() - b.date.getTime()));
        }
        else {
            projectsCopy.sort((a,b) => order*a.title.localeCompare(b.title));
        }

        return  (
            <div id="projects-container">
                <Switch>
                    <Route exact path={this.props.path}>
                        <h1>Projects</h1>
                        <div className="separator"/>
                        <br/>
                        <div id="projects-list-container">
                            {projectsCopy.map((item) => <ListItem mobile={this.props.mobile} {...item}/>)}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Projects;