import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import mhype from '../../media/hyperloop/mhype_thumb.jpeg'

var moment = require('moment'); 

export default function HyperloopPrechargePCB() {
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
    title: "Michigan Hyperloop - Precharge PCB"
    , subtitle: "A PCB that interfaces the contactor drivers to the pod contactors and switches the high voltage bus through a precharge resistor upon energizing the motor controller. \
                Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["High Voltage", "PCB", "Michigan Hyperloop"]
    , date: moment("20180423")
    , route: "/hyperloop/precharge"
    , thumbnail: mhype
    , priority: 0
}