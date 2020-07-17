import React from 'react';
import '../sass/nav.scss';
import resume from '../media/Jack Rademacher Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { backpacking, projects } from '../item-content.js'

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

function Nav(props) {
    projects.sort((a, b) => a.title.localeCompare(b.title));
    backpacking.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <nav className={props.show ? " show" : ""} id='site-nav'>
            <div id="nav-container" className={props.mobile ? "mobile" : ""}>
                <NavHeader to="/" title="Home"/>
                <NavHeader to="/projects" title="Projects">
                    {projects.map((el) => <NavItem key={el.route} to={el.route}>{el.title}</NavItem>)}
                </NavHeader>
                <NavHeader to="/backpacking" title="Backpacking">
                    {backpacking.map((el) => <NavItem key={el.route} to={el.route}>{el.title}</NavItem>)}
                </NavHeader>
                <div className="nav-header-container">
                    <span className="nav-header">
                        <a href={resume}>
                            Résumé
                        </a>
                    </span>
                </div>
            </div>
            <div id='contact-container' className={props.show ? "show" : ""}>
                <a href="https://linkedin.com/in/jack-rademacher" className='icon-link social-media-link'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href="mailto:jackradema@gmail.com" className='icon-link social-media-link'><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="https://www.instagram.com/jrad66/?hl=en" className='icon-link social-media-link'><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://github.com/jcrademacher" className='icon-link social-media-link'><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </nav>
    );
}

export default Nav;