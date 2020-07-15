import React from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { backpacking, projects } from './item-content.js'

const path = require('path');

class NavHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false
        };
    }

    render() {
        var openClass = this.state.opened ? "opened" : "";

        return (
            <div className="nav-header-container">
                <span className="nav-header" >
                    {this.props.children ? 
                        <FontAwesomeIcon 
                            className={`nav-header-icon ${openClass}`} 
                            icon={faCaretRight}
                            onClick={() => this.setState({opened: !this.state.opened})}
                        /> 
                    :   
                        <span></span>
                    }
                    <Link to={this.props.to}>
                        {this.props.title}
                    </Link>
                </span>
                {this.props.children ? 
                    <div className={`nav-content ${openClass}`}>
                        {this.props.children}
                    </div>
                :
                    <div></div>
                }
                
            </div>
        );
    }
}

function NavItem(props) {
    return (
        <div className="nav-item">
            <Link className="no-underline hover" to={props.to}>{props.children}</Link>
        </div>
    );
}

function navItemMapper(data, stubs) {
    data.sort((a, b) => a.title.localeCompare(b.title));

    return data.map((el) => (
        <NavItem to={el.route}>{el.title}</NavItem>
    ));
}

function Nav(props) {
    return (
        <nav className={props.show ? " show" : ""} id='site-nav'>
            <div id="nav-container" className={props.mobile ? "mobile" : ""}>
                <NavHeader to="/" title="Home"/>
                <NavHeader to="/projects" title="Projects">
                    {navItemMapper(projects)}
                </NavHeader>
                <NavHeader to="/backpacking" title="Backpacking">
                    {navItemMapper(backpacking)}
                </NavHeader>
            </div>
            <div id='contact-container'>
                <a href="https://linkedin.com/in/jack-rademacher" className='icon-link social-media-link'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href="mailto:jackradema@gmail.com" className='icon-link social-media-link'><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="https://linkedin.com/in/jack-rademacher" className='icon-link social-media-link'><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://linkedin.com/in/jack-rademacher" className='icon-link social-media-link'><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </nav>
    );
}

export default Nav;