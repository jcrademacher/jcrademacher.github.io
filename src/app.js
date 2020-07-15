import React from 'react';
import './app.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Nav from './nav.js'
import Home from './home.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MOBILE_WIDTH = 800;

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
            <Router>
                <div id="site-container">
                    <div id="site-header" className={this.state.mobile ? "mobile" : ""}>
                        <a onClick={() => this.setState({showNav: !this.state.showNav})} className="icon-link"><FontAwesomeIcon icon={faBars}/></a>
                    </div>
                    <Nav show={this.state.showNav} mobile={this.state.mobile}/>
                    <div onClick={() => this.setState({showNav: !this.state.mobile || false})} id="site-content" className={this.state.mobile ? "mobile" : ""}>
                        <Switch>
                            <Route path="/projects">

                            </Route>
                            <Route path="/">
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
