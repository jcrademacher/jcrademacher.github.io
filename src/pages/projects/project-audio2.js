import React from 'react'
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import audio2_single_sided_demo from '../../media/audio_music2/audiov2_single_sided_demo.mp4'
import audio2_double_sided_demo from '../../media/audio_music2/audiov2_double_sided_demo.mp4'
import audio2 from '../../media/audio_music2/audio_music2_thumb.jpg'
var moment = require('moment');

export default function AudioLEDsVersion2Project() {
    return (
        <div>
            <h3 id="intro">Introduction</h3>
            <div>
                <video controls style={{width: "100%", maxWidth: 800, margin: 10}}>
                    <source src={audio2_single_sided_demo} type="video/mp4"/>
                </video>
                <video controls style={{width: "100%", maxWidth: 800, margin: 10}}>
                    <source src={audio2_double_sided_demo} type="video/mp4"/>
                </video>
                <br/><br/>
                This project is version 2 of my audio reactive LED project. The first is <a href="/projects/music-led-2">here</a>. In version 1 it was difficult to see the audio changes happening
                in realtime, since it only reacted to the volume (voltage level) of the audio input. In order to see the audio better, I needed to somehow separate the signal into frequencies, since that is a vital component in how humans hear sound.
                The way to do this is through what is known as a <a href="https://en.wikipedia.org/wiki/Fourier_transform">Fourier Transform</a>. I won't get into the math behind the Fourier Transform, but the basic concept is that it transforms
                a time-dependent, finite-duration signal into the frequencies (pure sinusoids) that it is composed of. On a microprocessor, in my case the <a href="">STM32F4</a>, this is achieved through a
                 <a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform">Fast Fourier Transform</a>, or FFT. This a discrete-time input, discrete-frequency output version of the original continuous Fourier Transform.
                <br></br>
                <br></br>
                I designed a custom PCB to amplify the audio input through a 3.5mm jack, process it on the STM32F4, and output the proper LED pattern to display a real time spectrum of the audio. 
                The low frequencies are shown on the left side of the display, midrange in the middle, and high frequencies on the right. In this post I will walk through my design of all the hardware components, the software, and the actual wooden build that eveything is mounted to. 
            </div>
            <h3></h3>
        </div>
    );
};

export function TableOfContents() {
    return (
        <TableOfContentsWrapper>
            <TableOfContentsHeading title="Introduction" elementId="intro"/>
            <TableOfContentsHeading title="Hardware" elementId="hw">
                <TableOfContentsSubheading title="Audio Front End" elementId="audio"/>
                <TableOfContentsSubheading title="Microcontroller and Digital Output"  elementId="uc"/>
                <TableOfContentsSubheading title="Power Supplies" elementId="power"/>
                <TableOfContentsSubheading title="Connectors/Misc" elementId="conn"/>
                <TableOfContentsSubheading title="PCB & Layout" elementId="pcb"/>
            </TableOfContentsHeading>
            <TableOfContentsHeading title="Software" elementId="sw">
                <TableOfContentsSubheading title="ADC and DMA" elementId="adc"/>
                <TableOfContentsSubheading title="Decomposing into Frequencies" elementId="freq"/>
                <TableOfContentsSubheading title="Human Equal Loudness Contour" elementId="elc"/>
                <TableOfContentsSubheading title="Logarithmic Frequency Transform" elementId="lft"/>
                <TableOfContentsSubheading title="Rainbow Color Pattern" element="rainbow"/>
                <TableOfContentsSubheading title="LED Output" elementId="led"/>
            </TableOfContentsHeading>
            <TableOfContentsHeading title="Wooden Stand and Mounting" elementId="mount">

            </TableOfContentsHeading>
        </TableOfContentsWrapper>
    );
};

export const metadata = { 
    title: "Audio Visualizer [Version 2] - LED Matrix"
    , subtitle: "Audio reactive LED matrix for nightstand or bedside controlled by an STM32F4 microcontroller. \
                A custom PCB performs an FFT from a 3.5mm jack or an electret microphone. \
                "
    , tags: ["STM32", "WS2812", "C", "LED", "PCB", "Build", "Audio"]
    , date: moment("20200716")
    , thumbnail: audio2
    , route: "/music-led-2"
};