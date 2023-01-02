import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'

var moment = require('moment'); 

export default function Humboldt() {
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
    title: "Kings Peak - High Uintas Wilderness"
    , location: "Duchesne County, Utah"
    , subtitle: "Kings Peak is the highest peak in Utah, just below 14k feet. We started at Henry's Fork trailhead and hiked up along Henry's Fork river \
                before having to traverse a passe to reach the base of the peak."
    , date: moment("20200807")
    //, thumbnail: franconia
    , route: "/kings-peak"
    , tags: []
}