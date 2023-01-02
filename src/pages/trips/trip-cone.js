import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import cone_peak from '../../media/cone_peak/cone_peak_thumb.jpeg'

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
    title: "Cone Peak via Highway 1"
    , subtitle: "Beginning at the trailhead immediately across from Kirk Creek state park, we hiked 10.5 miles to the peak, then descended back to Ventura campground for the night."
    , location: "Big Sur, CA"
    , date: moment("20190601")
    , thumbnail: cone_peak
    , route: "/cone-peak"
    , tags: []
}