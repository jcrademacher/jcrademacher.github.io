import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import audio1 from '../../media/audio_music1/audio_music1_thumb.jpg'

var moment = require('moment'); 

function AudioLEDsVersion1Project() {
    return (
        <div>
            This page is still under construction, please check back soon!
        </div>
    );
}

export default AudioLEDsVersion1Project;

export function TableOfContents() {
    return (
        <TableOfContentsWrapper>

        </TableOfContentsWrapper>
    );
}

export const metadata = { 
    title: "Audio Visualizer [Version 1] - LED Strip"
    , subtitle: "Audio reactive LED strip for household living room. Controlled from an Arduino nano & takes audio \
                input from a 3.5mm jack. Version 1.\
                "
    , tags: ["Arduino Nano", "WS2812", "C/C++", "LED", "Build", "Audio"]
    , date: moment("20181005")
    , thumbnail: audio1
    , route: "/music-led-1"
}