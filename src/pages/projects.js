import React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";
import { projects } from '../item-content'
import '../sass/projects.scss'

import ContentListItem from '../components/content-list'

function ProjectPage() {
    return (
        <div>

        </div>
    );
}

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: "date",
            sortOrder: "descending"
        }
    }

    render() {
        var projectsCopy = [...projects];
        let { sortBy, sortOrder } = this.state;

        let order = sortOrder == "ascending" ? 1 : -1;

        if(sortBy == "date") {
            projectsCopy.sort((a,b) => order*(a.date.isSameOrAfter(b.date) ? 1 : -1));
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
                            {projectsCopy.map((item) => <ContentListItem key={item.route} mobile={this.props.mobile} {...item}/>)}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Projects;