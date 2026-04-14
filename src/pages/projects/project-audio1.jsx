import { Link } from 'react-router-dom';
import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import headerImage from '../../media/audio_music1/audio_music1_thumb.jpg'
import thumbnail from '../../media/audio_music1/audio_music1_thumb.jpg?thumbnail'
import moment from 'moment';

function AudioLEDsVersion1Project() {
    return (
        <div>
            <p>
                This project was version 1 of a larger goal to make LEDs react to the beat of music that I like. In this project, I used an Arduino nano 
                to sample the input from an audio jack and display the level of the audio as the number of LEDs lit up on a strip. This was a pretty basic proof-of-concept 
                that led to a much-needed improvement in the <Link to="/projects/music-led-2">version 2</Link> that I made.
            </p>
        </div>
    );
}

export default AudioLEDsVersion1Project;

export function TableOfContents() {
    return <div></div>;
}

export const metadata = { 
    title: "Audio Visualizer [Version 1] - LED Strip"
    , subtitle: "Audio reactive LED strip for household living room. Controlled from an Arduino nano & takes audio \
                input from a 3.5mm jack. Version 1.\
                "
    , tags: ["Arduino Nano", "WS2812", "C/C++", "LED", "Build", "Audio"]
    , date: moment("20181005")
    , thumbnail
    , headerImage
    , route: "/music-led-1"
    , priority: 5
}
