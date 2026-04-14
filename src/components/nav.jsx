import { useState } from 'react';
import '../sass/nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { importProjectModules, importTripModules, importResearchModules } from '../util'

function NavHeader({ to, title, children }) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="nav-header-container">
            <span className="nav-header" >
                {children ? 
                    <FontAwesomeIcon 
                        className={`nav-header-icon ${opened ? "opened" : ""}`} 
                        icon={faCaretRight}
                        onClick={() => setOpened(prev => !prev)}
                    /> 
                :   
                    <span></span>
                }
                <Link to={to}>
                    {title}
                </Link>
            </span>
            {children ? 
                <div className={`nav-content ${opened ? "opened" : ""}`}>
                    {children}
                </div>
            :
                <div></div>
            }
            
        </div>
    );
}

function NavItem({ to, children }) {
    return (
        <div className="nav-item">
            <Link className="no-underline hover" to={to}>{children}</Link>
        </div>
    );
}

function Nav({ show, mobile }) {
    let projectMetadata = importProjectModules()
                            .map((item) => item.metadata)
                            .sort((a, b) => a.title.localeCompare(b.title));

    let tripMetadata = importTripModules()
                            .map((item) => item.metadata)
                            .sort((a, b) => a.title.localeCompare(b.title));

    let researchMetadata = importResearchModules()
                            .map((item) => item.metadata)
                            .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <nav className={show ? " show" : ""} id='site-nav'>
            <div id="nav-container" className={mobile ? "mobile" : ""}>
                <NavHeader to="/" title="Home"/>
                <NavHeader to="/research" title="Research">
                    {researchMetadata.map((el) => <NavItem key={el.route} to={`/research${el.route}`}>{el.title}</NavItem>)}
                </NavHeader>
                <NavHeader to="/projects" title="Projects">
                    {projectMetadata.map((el) => <NavItem key={el.route} to={`/projects${el.route}`}>{el.title}</NavItem>)}
                </NavHeader>
                <NavHeader to="/trips" title="Backpacking">
                    {tripMetadata.map((el) => <NavItem key={el.route} to={`/trips${el.route}`}>{el.title}</NavItem>)}
                </NavHeader>
                <div className="nav-header-container">
                    <span className="nav-header">
                        <Link to="/resume">
                            Resume
                        </Link>
                    </span>
                </div>
            </div>
            <div id='contact-container' className={show ? "show" : ""}>
                <a href="https://linkedin.com/in/jack-rademacher" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faLinkedinIn}/></a>
                <a href="mailto:jackradema@gmail.com" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faEnvelope}/></a>
                <a href="https://www.instagram.com/jrad66/" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faInstagram}/></a>
                <a href="https://github.com/jcrademacher" className='icon-link social-media-link'><FontAwesomeIcon size="lg" icon={faGithub}/></a>
            </div>
        </nav>
    );
}

export default Nav;
