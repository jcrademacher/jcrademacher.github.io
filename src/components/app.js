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
import ContentHome from '../pages/content-home.js'
import Page404 from '../pages/404.js'
import '../sass/app.scss';

const MOBILE_WIDTH = 1000;

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
                            <Route path="/projects"
                                component={() => <ContentHome dir="projects" mobile={this.state.mobile}/>}
                            />
                            <Route path="/trips"
                                component={() => <ContentHome dir="trips" mobile={this.state.mobile}/>}
                            />
                            <Route exact path="/">
                                <Home show={this.props.mobile}/>
                            </Route>
                            <Route>
                                <Page404/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
