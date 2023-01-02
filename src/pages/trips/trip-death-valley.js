import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import death_valley from '../../media/death_valley/death_valley_thumb.jpeg'

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
    title: "Death Valley & Telescope Peak"
    , subtitle: "Telescope peak is the highest point in Death Valley National park at about 11,000ft. The beauty of this area is that the mountain and valley floor are within 15 miles \
                of each other, so the peak is incredibly prominent and genuinely looks like 11,000ft. This is unlike most other ranges in the US, since the surrounding area isn't typically this far below nor this close to a nearby peak"
    , date: moment("20190608")
    , location: "Inyo County, CA"
    , thumbnail: death_valley
    , route: "/telescope"
    , tags: []
}