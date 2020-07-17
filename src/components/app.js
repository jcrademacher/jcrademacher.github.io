import React from 'react';
import {
    Router,
    Switch,
    Route
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Nav from './nav.js'
import Home from '../pages/home.js';
import Projects from '../pages/projects.js'
import Backpacking from '../pages/backpacking.js'
import '../sass/app.scss';

const MOBILE_WIDTH = 700;

class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            mobile: window.innerWidth < MOBILE_WIDTH,
            showNav: window.innerWidth > MOBILE_WIDTH,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    updateDimensions = () => {
        var nav = this.state.showNav;
        var mobile = this.state.mobile;

        if(window.innerWidth > MOBILE_WIDTH) {
            mobile = false;
            nav = true;
        }
        else {
            mobile = true;
            nav = false;
        };

        this.setState({ mobile: mobile, showNav: nav, width: window.innerWidth, height: window.innerHeight });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <Router basename={`${process.env.PUBLIC_URL}/`} history={this.props.history}>
                <div id="site-container">
                    <div id="site-header" className={this.state.mobile ? "mobile" : ""}>
                        <a onClick={() => this.setState({showNav: !this.state.showNav})} className="icon-link">
                            <FontAwesomeIcon icon={faBars} className={`burger ${this.state.showNav ? "rotate" : ""}`}/>
                        </a>
                    </div>
                    <Nav show={this.state.showNav} mobile={this.state.mobile}/>
                    <div onClick={() => this.setState({showNav: !this.state.mobile || false})} id="site-content" className={this.state.mobile ? "mobile" : ""}>
                        <Switch>
                            <Route path="/projects">
                                <Projects mobile={this.state.mobile}/>
                            </Route>
                            <Route path="/backpacking">
                                <Backpacking mobile={this.state.mobile}/>
                            </Route>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
