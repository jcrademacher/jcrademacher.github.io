import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import yosemite from '../../media/yosemite/yosemite_thumb.jpeg'

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
    title: "Yosemite National Park via Chiquito Trailhead"
    , subtitle: "Since Yosemite Valley is incredibly heavily trafficked and requires reservations many months in advance, we decided to take the chiquito trailhead \
                beginning just outside the southern border of Yosemite National Park. We hiked for about 13 miles, completely alone, until we reached a rock outcropping with spectacular views of Yosemite Valley"
    , location: "Bass Lake, CA"
    , date: moment("20190727")
    , thumbnail: yosemite
    , route: "/backpacking/yosemite"
    , tags: []
}