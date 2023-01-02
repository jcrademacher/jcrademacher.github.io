import React from 'react'
import '../sass/home.scss'
import profile from '../media/profile.jpg';
import mich from '../media/Block_M-Hex.png';
import mit from '../media/MIT_logo.png';
import resume from '../media/resume.pdf'
import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <div id="home">
            <div id="profiles">
                <img class="profile-cl" src={mich}></img>
                <img id="profile" src={profile}></img>
                <img class="profile-cl" src={mit}></img>
            </div>
            
            <br/><br/>
            <h3>Hi, my name is Jack Rademacher and I'm a PhD student at MIT
            </h3>
            <p>
                I built this site to showcase my <Link to="/projects">projects</Link> and <Link to="/backpacking">backpacking</Link> trips. 
                I received my undergraduate degree in Electrical Engineering at the University of Michigan in 2021, and currently I am a graduate research assistant
                in the <a href="https://signal-kinetics.media.mit.edu/">Signal Kinetics</a> group at the <a href="https://www.media.mit.edu/">MIT Media Lab</a>.
                My research focuses on ultra low power, long range <a href="https://signal-kinetics.media.mit.edu/publications/ocean-iot/">underwater backscatter</a> for 
                large-scale ocean and climate monitoring, aquaculture, and naval defense. 
            </p>
            <div id="home-flex">
                <div class="home-flex-item">
                    <h3>Experience</h3>
                    <ul>
                        <li>Circuit design</li>
                        <li>Digital communication systems</li>
                        <li>Embedded systems</li>
                        <li>RF & microwave systems</li>
                        <li>Underwater acoustics</li>
                        <li>Piezoelectric transducer fabrication</li>
                        <li>Electro-mechanical co-design</li>
                        <li>Computer networks</li>
                    </ul>
                </div>
                <div class="home-flex-item"><h3>Software/Hardware Platforms</h3>
                    <ul>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>MATLAB</li>
                        <li>Javascript (NodeJS, React, ReactNative)</li>
                        <li>Altium Designer</li>
                        <li>Keysight ADS</li>
                        <li>STM32</li>
                        <li>Solidworks</li>
                    </ul>
                </div>
            </div>
            <p>
                During my free time I design hardware & software for fun, often times with those <a href="https://cdn-shop.adafruit.com/datasheets/WS2812.pdf">WS2812 RGB LEDs</a> and 
                <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"> STM32 microcontrollers</a>. 
                All software files are hosted on my <a href="https://github.com/jcrademacher">Github</a>, including this site. 
                If you have any questions about my projects feel free to <a href="mailto:jackradema@gmail.com">email me</a>. 
                For a full list of my qualifications and work experience you can check out my <a href={resume}>resume</a>.
            </p>
        </div>
    );
}

export default Home;