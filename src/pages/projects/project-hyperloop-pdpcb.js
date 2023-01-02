import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
//import audio1 from '../../media/audio_music1/audio_music1_thumb.jpg'

var moment = require('moment'); 

export default function HyperloopPDPCB() {
    return (
        <div>
            This page is still under construction, please check back soon!
        </div>
    );
}

export function TableOfContents() {
    return (
        <TableOfContentsWrapper>

        </TableOfContentsWrapper>
    );
}

export const metadata = { 
    title: "Michigan Hyperloop - Power Distribution PCB"
    , subtitle: "A power distribution PCB to take an 8S lithium battery voltage and convert to regulated +24V, +12V, and +5V supplies. \
                Capable of converting up to 200W from the battery. Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["Power", "Battery", "PCB", "Michigan Hyperloop"]
    , date: moment("20180415")
    , route: "/hyperloop/pdpcb"
}