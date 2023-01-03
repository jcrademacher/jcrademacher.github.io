import React from 'react'

import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import breadboarding from '../../media/scoreboard/scoreboard - 1.jpeg'
import fet_diagram from '../../media/scoreboard/fet_diagram.png'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import scoreboard from '../../media/scoreboard/scoreboard_thumb.jpeg'

var moment = require('moment'); 

export default function ScoreboardProject(props) {
    return (
        <div>
            <h3 id="intro">Introduction</h3>
            <p>
                This project started back in the beginning of Winter 2017. I've played hockey for most of my life, so my family had been building a backyard 
                ice rink every year since 2011 (this rink was actually in our neighbor's yard, not ours). Our neighbor who owned this property actually had the initial scoreboard idea.
                We were just hanging out setting up the plywood boards one day when he said, "You know what would be really sweet? Some kind of scoreboard. We really need to decorate this place". 
                At first I didn't know how we would even do that, buy one maybe? But I realized I had enough electronics and software experience to build it myself, and the more I thought about
                it the more my vision came together about what the system would look like. 
            </p>
            <br/>
            <h3 id="proto">Prototyping</h3>
            <div className="img-paragraph">
                <p>
                    <img alt="scoreboard prototyping" align="left" className="left-img" src={breadboarding}/>
                    I decided early on that the system needed to be wireless. A physical control panel would have been a whole other build, and it would have been limited in where it could have traveled.
                    Enabling control wirelessly through an app would allow for skaters to control the device from wherever they wanted in the backyard, including on the ice. 
                    <br/><br/>
                    I started the build with a breadboard, a <a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/">RaspberryPi 3 Model B</a>, white LED strips, and some N-ch MOSFETs.
                    The LED strips I started with were <a href="https://www.homedepot.com/p/Commercial-Electric-8-ft-LED-Warm-White-Under-Cabinet-Light-LS2835-8F/306549382">white +12V ones from home depot</a>.  
                    I connected each GPIO pin to the gate of a MOSFET, and connected the strips in series with the MOSFET. With N-channel FETs this is known as a low side switch configuration.
                    See the circuit diagram below. 
                    <br/>
                    <div className="center-img">
                        <img alt="Low side NFET with LED circuit diagram" align="center" src={fet_diagram}/>
                    </div>
                    In python the code to turn on a GPIO pin looks like this:
                    <SyntaxHighlighter language="python" style={atomDark}>
{
`
import RPi.GPIO as GPIO
...
GPIO.setup(0, GPIO.OUT)
GPIO.output(0, GPIO.HIGH)
`
}
                    </SyntaxHighlighter>
                </p>
            </div>
        </div>
    );
}

export function TableOfContents() {
    return (
        <TableOfContentsWrapper>
            <TableOfContentsHeading title="Introduction" elementId="intro"/>
            <TableOfContentsHeading title="Prototyping" elementId="proto"/>
        </TableOfContentsWrapper>
    );
}

export const metadata = { 
    title: "LED Hockey Scoreboard"
    , subtitle: "A RaspberryPi & Arduino Uno based wireless scoreboard for a backyard ice rink. Capable of displaying \
                 a game clock, home score, and away score using white & RGB LEDs. Controllable from a mobile web app over WiFi.\
                "
    , tags: ["RaspberryPi 3", "Arduino Uno", "WS2812", "Python", "C/C++", "LED", "Build", "PCB"]
    , date: moment("20171212")
    , thumbnail: scoreboard
    , route: "/scoreboard"
    , priority: 9
};