import React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";
import { backpacking } from '../item-content'
import '../sass/projects.scss'

import ContentListItem from '../components/content-list'

function BackpackingPage() {
    return (
        <div>

        </div>
    );
}

class Backpacking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: "date",
            sortOrder: "descending"
        }
    }

    render() {
        var backpackingCopy = [...backpacking];
        let { sortBy, sortOrder } = this.state;

        let order = sortOrder == "ascending" ? 1 : -1;

        if(sortBy == "date") {
            backpackingCopy.sort((a,b) => order*(a.date && a.date.isSameOrAfter(b.date) ? 1 : -1));
        }
        else {
            backpackingCopy.sort((a,b) => order*a.title.localeCompare(b.title));
        }

        return  (
            <div id="projects-container">
                <Switch>
                    <Route exact path={this.props.path}>
                        <h1>Backpacking</h1>
                        <div className="separator"/>
                        <br/>
                        <div id="projects-list-container">
                            {backpackingCopy.map((item) => <ContentListItem key={item.route} mobile={this.props.mobile} {...item}/>)}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Backpacking;