import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import cmcd from '../../media/cmcd_paper/cmcd_thumb.png';

var moment = require('moment'); 

function CMCDPaper() {
    return (
        <div>
            <p>
                This paper was an undergraduate research project that I worked on during my senior year at Michigan. It was my first taste of research that I ended up really enjoying. 
                In this work I derived and formulated the majority of loss mechanisms in what is known as a current-mode class-D converter (CMCD). This topology has 
                the potential to offer high-power and high-efficiency inductive wireless power transfer (WPT) in small form-factors. In this work I showed that with careful selection of 
                design parameters, a CMCD WPT system can be built to deliver roughly 100W at nearly 90% efficiency. 
            </p>
            <p>
                A CMCD WPT system typically contains primary and secondary coils, with an air gap in between the coupled coils. The primary and secondary circuits are 
                nearly identical, and they work by switching a DC current in and out of a resonant tank that contains the power transfer coils. They can be extremely efficient 
                since at resonance the switches perform <a href="https://www.digikey.com/en/articles/a-review-of-zero-voltage-switching-and-its-importance-to-voltage-regulation">zero voltage switching</a>. 
                In this work we used GaN FETs and I wrote a MATLAB script to optimize the design parameters for efficiency.
            </p>
        </div>
    );
}

export default CMCDPaper;

export function TableOfContents() {
    return <div></div>;
    // return (
    //     <TableOfContentsWrapper>

    //     </TableOfContentsWrapper>
    // );
}

export const metadata = { 
    title: "High Power, High Efficiency Wireless Power Transfer at 27.12 MHz Using CMCD Converters [ECCE'21]"
    , subtitle: `Current-mode class D (CMCD) converters are robust choices for bi-directional wireless power transfer (WPT)
    due to strong voltage boundary and simplicity at high frequency
    (HF, 3-30 MHz) and very high frequency (VHF, 30-300 MHz).
    A CMCD operating at HF-VHF also enables high power density
    and circuit integration, but suffers from multiple loss mechanisms
    that degrade efficiency. Operating at high frequency and high
    power output presents unique challenges, including parasitic
    switch losses and WPT coil losses. GaN FETs are the leading
    candidates for next generation power electronics due to their
    superior switching speed and power handling capability, but
    remain a primary factor limiting a CMCD from achieving high
    efficiency at higher power and higher frequency. In this paper,
    we investigate the losses that occur in CMCD converters and
    formulate an optimization procedure to maximize efficiency.
    This procedure is verified against a full circuit simulation
    within LTspice. With careful selection of design parameters, the
    performance of an optimized CMCD can achieve 101.9 W with
    89.6% efficiency at 27.12 MHz.`
    , tags: ["Research", "Power Electronics", "Wireless Power Transfer", "Power Conversion Systems"]
    , date: moment("20211010")
    , doi: "https://doi.org/10.1109/ECCE47101.2021.9594951"
    , event: "2021 IEEE Energy Conversion Congress and Exposition (ECCE)"
    , thumbnail: cmcd
    , route: "/cmcd-paper"
    , priority: 5
}