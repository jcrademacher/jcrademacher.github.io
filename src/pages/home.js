import React from 'react'
import '../sass/home.scss'
import profile from '../media/profile.jpg';
import {
    Link
} from "react-router-dom";
import adi from '../media/adi.png';

function Home() {
    return (
        <div id="home">
            <img id="profile" src={profile}></img>
            <br/><br/>
            <h3>Hi, my name is Jack Rademacher and I'm a student at the University of Michigan studying Electrical Engineering.
            </h3>
            <p>
                I built this site to showcase my <Link to="/projects">projects</Link> and <Link to="/backpacking">backpacking</Link> trips. My electronics interests include RF & microwave, mixed signal processing, and IC design, although I don't have many builds in those fields yet.
                During my free time I design hardware & software to do cool stuff, often times with those 
                awesome <a href="https://cdn-shop.adafruit.com/datasheets/WS2812.pdf">WS2812 RGB LEDs</a> and 
                <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"> STM32 microcontrollers</a>. 
                All design files are hosted on my <a href="https://github.com/jcrademacher">Github</a>, including this site. 
                <br/><br/>
                If you have any questions about my projects feel free to <a href="mailto:jackradema@gmail.com">email me</a>. 
                For a full list of my qualifications and work experience you can check out my <Link to="/resume">resume</Link>.
            </p>
        </div>
    );
}

export default Home;