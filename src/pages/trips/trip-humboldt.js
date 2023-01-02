import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import humboldt from '../../media/humboldt/humboldt_thumb.jpeg'

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

export const metadata = { title: "Humboldt Peak via South Colony Lakes Trailhead"
    , location: "Westcliffe, CO"
    , subtitle: "My first fourteener! Since I was worried about the altitude, I decided to hike in to Upper South Colony lake and camp for the night to acclimate, instead of summiting immediately. \
                This took about 7.5 miles. I really wanted to summit for the sunrise, so I got up at about 3:30am and began hiking at around 4:00am to see the sunrise for 5:30am."
    , date: moment("20200620")
    , thumbnail: humboldt
    , route: "/humboldt"
    , tags: []
    }