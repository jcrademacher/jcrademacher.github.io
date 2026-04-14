import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Nav from './nav.jsx'
import Home from '../pages/home.jsx';
import ContentHome from '../pages/content-home.jsx'
import Page404 from '../pages/404.jsx'
import '../sass/app.scss';
import resume from "../media/Jack Rademacher Resume 2026.pdf";

const MOBILE_WIDTH = 1000;

function App() {
    const [mobile, setMobile] = useState(window.innerWidth < MOBILE_WIDTH);
    const [showNav, setShowNav] = useState(window.innerWidth > MOBILE_WIDTH);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > MOBILE_WIDTH) {
                setMobile(false);
                setShowNav(true);
            } else {
                setMobile(true);
                setShowNav(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeNav = useCallback(() => {
        if (showNav && mobile) {
            setShowNav(false);
        }
    }, [showNav, mobile]);

    return (
        <BrowserRouter>
            <div id="site-container">
                <div id="site-header" className={mobile ? "mobile" : ""}>
                    <a onClick={() => setShowNav(prev => !prev)} className="icon-link">
                        <FontAwesomeIcon icon={faBars} className={`burger ${showNav ? "rotate" : ""}`}/>
                    </a>
                </div>
                <Nav show={showNav} mobile={mobile}/>
                <div onClick={closeNav} id="site-content" className={mobile ? "mobile" : ""}>
                    <Routes>
                        <Route path="/projects/*"
                            element={<ContentHome name="Projects" mobile={mobile}/>}
                        />
                        <Route path="/trips/*"
                            element={<ContentHome name="Trips" mobile={mobile}/>}
                        />
                        <Route path="/research/*"
                            element={<ContentHome name="Research" mobile={mobile}/>}
                        />
                        <Route path="/resume"
                            element={<iframe src={resume} width="100%" height="100%"/>}
                        />
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
