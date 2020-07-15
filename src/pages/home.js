import React from 'react'
import '../sass/home.scss'
import profile from '../media/profile.jpg'

function Home() {
    return (
        <div id="home">
            <img id="profile" src={profile}></img>
            <br/>
            <h3>Hi, my name is Jack Rademacher and I'm a student at the University of Michigan studying Electrical Engineering.
            </h3>
            <p>
                I built this site to showcase my projects and backpacking trips. My electronics interests include RF & microwave, mixed signal processing, and IC design, although I don't have many builds in those fields yet.
                During my free time I design hardware & software to do cool stuff, often times with those 
                awesome <a href="https://cdn-shop.adafruit.com/datasheets/WS2812.pdf">WS2812 RGB LEDs</a> and 
                <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"> STM32 microcontrollers</a>. 
                Many of my projects are printed circuit board (PCB) based, as it is an easy, affordable, and reliable way to consolidate circuitry and buttons or dials.
            </p>
        </div>
    );
}

export default Home;