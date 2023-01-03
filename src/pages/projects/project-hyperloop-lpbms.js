import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import mhype from '../../media/hyperloop/mhype_thumb.jpeg'

var moment = require('moment'); 

export default function HyperloopLPBMS() {
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
    title: "Michigan Hyperloop - Low Power BMS"
    , subtitle: "Battery management system for a lithium-ion battery with up to 8 cells in series based on the Rensas ISL94202. \
                Designed for Michigan Hyperloop in 2018. \
                "
    , tags: ["Renesas", "ISL94202", "BMS", "Battery", "PCB", "Michigan Hyperloop"]
    , date: moment("20190223")
    , route: "/hyperloop/bms"
    , thumbnail: mhype
    , priority: 0
}