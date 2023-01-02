import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import pod from '../../media/hyperloop/pod_thumb.png'

var moment = require('moment'); 

export default function Hyperloop() {
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
    title: "Michigan Hyperloop"
    , subtitle: "Michigan Hyperloop was a student-operated engineering design team that existed from Fall 2016 to December 2019. We designed, manufactured, built, and tested \
                a hyperloop pod to compete in the annual SpaceX Hyperloop Pod Competition. "
    , tags: ["Michigan Hyperloop"]
    , date: moment("20170901")
    , thumbnail: pod
    , route: "/hyperloop"
}