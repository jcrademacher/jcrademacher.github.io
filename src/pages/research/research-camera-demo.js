import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import thumb from '../../media/camera_demo/camera_demo_thumb.jpg';

var moment = require('moment'); 

function CameraDemo() {
    return (
        <div>
            <h3>A demo video of the battery-free camera can be found <a href="https://www.youtube.com/watch?v=kyVZ1ll6_qY">here</a></h3>
            <p>
                This demo was a collaboration with multiple authors, most of whom are on the original <a href="https://www.nature.com/articles/s41467-022-33223-x">Nature Communications paper</a>.
                I spearheaded the development of this demo to make it operate much closer to "real-time" than the original paper and to be more usable in a demonstration environment. 
            </p>
            <p>
                The camera operates by first harvesting energy from a remote source (in our case, this is a piezoelectric element in the water) playing a tone. 
                Once enough energy is harvested, the image is captured in black and white, JPEG compressed, and error-correction coded with a <a href="https://en.wikipedia.org/wiki/BCH_code">BCH code</a> of N=127 and K=64 
                before being transmitted through <a href="https://www.mit.edu/~fadel/papers/PAB-paper.pdf">piezo-acoustic backscatter</a> and the signal is recorded at a remote hydrophone. 
                The recorded signal is downconverted, filtered, and decoded with a <a href="http://www.seas.ucla.edu/brweb/papers/Journals/BRFall17DFE.pdf">decision feedback equalizer</a>  
                &nbsp;(very widely used in underwater communication systems) before being error-corrected and formatted to display as a JPEG image. 
            </p>
        </div>
    );
}

export default CameraDemo;

export function TableOfContents() {
    return <div></div>;
    // return (
    //     <TableOfContentsWrapper>

    //     </TableOfContentsWrapper>
    // );
}

export const metadata = { 
    title: "Demo: Enabling Battery-Free Wireless Underwater Imaging [BEST DEMO - WUWNet'22]"
    , subtitle: `This demo presents a system for real-time wireless imaging of underwater environments using a fully-submerged battery-free camera.
                 The camera powers up from harvested acoustic energy, captures images using an ultra-low-power image sensor, and communicates  
                 wirelessly using piezo-acoustic backscatter.`
    , tags: ["Research", "Underwater Backscatter", "Battery-free Camera", "Digital Communication Systems"]
    , date: moment("20221116")
    , thumbnail: thumb
    , doi: "https://doi.org/10.1145/3567600.3569546"
    , event: "WUWNet '22: Proceedings of the 16th International Conference on Underwater Networks & Systems"
    , route: "/camera-demo"
    , priority: 10
}