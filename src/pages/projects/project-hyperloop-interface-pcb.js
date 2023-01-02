import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import audio1 from '../../media/audio_music1/audio_music1_thumb.jpg'

var moment = require('moment'); 

export default function HyperloopInterfacePCB() {
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
    title: "Michigan Hyperloop - Interface PCB"
    , subtitle: "A PCB that interfaces digital signals between modules from the high and low power systems.   \
                Additionally, this board houses drivers for the braking solenoids and high voltage contactors. Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["PCB", "Michigan Hyperloop"]
    , date: moment("20180421")
    , route: "/hyperloop/interface"
}