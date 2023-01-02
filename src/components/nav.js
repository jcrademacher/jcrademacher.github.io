import React from 'react';
import '../sass/nav.scss';
import resume from '../media/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { importProjectModules, importTripModules } from '../util'

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
    let projectMetadata = importProjectModules()
                            .map((item) => item.metadata)
                            .sort((a, b) => a.title.localeCompare(b.title));

    let tripMetadata = importTripModules()
                            .map((item) => item.metadata)
                            .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <nav className={props.show ? " show" : ""} id='site-nav'>
            <div id="nav-container" className={props.mobile ? "mobile" : ""}>
                <NavHeader to="/" title="Home"/>
                <NavHeader to="/projects" title="Projects">
                    {projectMetadata.map((el) => <NavItem key={el.route} to={path.join('/projects', el.route)}>{el.title}</NavItem>)}
                </NavHeader>
                <NavHeader to="/trips" title="Backpacking">
                    {tripMetadata.map((el) => <NavItem key={el.route} to={path.join('/trips', el.route)}>{el.title}</NavItem>)}
                </NavHeader>
                <div className="nav-header-container">
                    <span className="nav-header">
                        <a href={resume}>
                            Resume
                        </a>
                    </span>
                </div>
            </div>
            <div id='contact-container' className={props.show ? "show" : ""}>
                <a href="https://linkedin.com/in/jack-rademacher" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faLinkedinIn}/></a>
                <a href="mailto:jackradema@gmail.com" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faEnvelope}/></a>
                <a href="https://www.instagram.com/jrad66/?hl=en" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faInstagram}/></a>
                <a href="https://github.com/jcrademacher" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faGithub}/></a>
            </div>
        </nav>
    );
}

export default Nav;