import pod from './media/hyperloop/pod_thumb.png'
import scoreboard from './media/scoreboard/scoreboard_thumb.jpeg'
import audio1 from './media/audio_music1/audio_music1_thumb.jpg'
import audio2 from './media/audio_music2/audio_music2_thumb.jpg'
import bjt from './media/bjt_amp/bjt_amp_thumb.png'

import humboldt from './media/humboldt/humboldt_thumb.jpeg'
import franconia from './media/franconia/franconia_ridge_thumb.jpeg'
import death_valley from './media/death_valley/death_valley_thumb.jpeg'
import cone_peak from './media/cone_peak/cone_peak_thumb.jpeg'
import yosemite from './media/yosemite/yosemite_thumb.jpeg'

var moment = require('moment'); 

const backpacking = [
    { title: "Cone Peak via Highway 1"
    , subtitle: "Beginning at the trailhead immediately across from Kirk Creek state park, we hiked 10.5 miles to the peak, then descended back to Ventura campground for the night."
    , location: "Big Sur, CA"
    , date: moment("20190601")
    , thumbnail: cone_peak
    , route: "/backpacking/cone-peak"
    },
    { title: "Yosemite National Park via Chiquito Trailhead"
    , subtitle: "Since Yosemite Valley is incredibly heavily trafficked and requires reservations many months in advance, we decided to take the chiquito trailhead \
                 beginning just outside the southern border of Yosemite National Park. We hiked for about 13 miles, completely alone, until we reached a rock outcropping with spectacular views of Yosemite Valley"
    , location: "Bass Lake, CA"
    , date: moment("20190727")
    , thumbnail: yosemite
    , route: "/backpacking/yosemite"
    },
    { title: "Death Valley & Telescope Peak"
    , subtitle: "Telescope peak is the highest point in Death Valley National park at about 11,000ft. The beauty of this area is that the mountain and valley floor are within 15 miles \
                of each other, so the peak is incredibly prominent and genuinely looks like 11,000ft. This is unlike most other ranges in the US, since the surrounding area isn't typically this far below nor this close to a nearby peak"
    , date: moment("20190608")
    , location: "Inyo County, CA"
    , thumbnail: death_valley
    , route: "/backpacking/telescope"
    },
    { title: "Humboldt Peak via South Colony Lakes Trailhead"
    , location: "Westcliffe, CO"
    , subtitle: "My first fourteener! Since I was worried about the altitude, I decided to hike in to Upper South Colony lake and camp for the night to acclimate, instead of summiting immediately. \
                This took about 7.5 miles. I really wanted to summit for the sunrise, so I got up at about 3:30am and began hiking at around 4:00am to see the sunrise for 5:30am."
    , date: moment("20200620")
    , thumbnail: humboldt
    , route: "/backpacking/humboldt"
    },
    { title: "Franconia Ridge & Thirteen Falls"
    , location: "Lincoln, NH"
    , subtitle: "This route is basically the first half of the pemigewasset loop. We took franconia ridge on the first day and summited Mt. Flume, Mt. Liberty, Mt. Lincoln, Mt. Lafayette \
                    and Mt. Garfield. We stayed the night at the Garfield AMC site and then hiked down into the valley along franconia brook and through thirteen falls. "
    , date: moment("20200705")
    , thumbnail: franconia
    , route: "/backpacking/franconia-ridge"
    },
    { title: "Kings Peak - High Uintas Wilderness"
    , location: "Duchesne County, Utah"
    , subtitle: "Kings Peak is the highest peak in Utah, just below 14k feet. We started at Henry's Fork trailhead and hiked up along Henry's Fork river \
                before having to traverse a passe to reach the base of the peak."
    , date: moment("20200807")
    //, thumbnail: franconia
    , route: "/backpacking/kings-peak"
    }
];

const projects = [
    { title: "Audio Visualizer [Version 1] - LED Strip"
    , subtitle: "Audio reactive LED strip for household living room. Controlled from an Arduino nano & takes audio \
                 input from a 3.5mm jack. Version 1.\
                "
    , tags: ["Arduino Nano", "WS2812", "C/C++", "LED", "Build", "Audio"]
    , date: moment("20181005")
    , thumbnail: audio1
    , route: "/projects/music-led-1"
    },
    { title: "Audio Visualizer [Version 2] - LED Matrix"
    , subtitle: "Audio reactive LED matrix for nightstand or bedside controlled by an STM32F4 microcontroller. \
                A custom PCB performs an FFT from a 3.5mm jack or an electret microphone. \
                "
    , tags: ["STM32", "WS2812", "C", "LED", "PCB", "Build", "Audio"]
    , date: moment("20200716")
    , thumbnail: audio2
    , route: "/projects/music-led-2"
    },
    { title: "Michigan Hyperloop - Low Power BMS"
    , subtitle: "Battery management system for a lithium-ion battery with up to 8 cells in series based on the Rensas ISL94202. \
                Designed for Michigan Hyperloop in 2018. \
                "
    , tags: ["Renesas", "ISL94202", "BMS", "Battery", "PCB", "Michigan Hyperloop"]
    , date: moment("20190223")
    , route: "/projects/hyperloop/bms"
    },
    { title: "Michigan Hyperloop - Power Distribution PCB"
    , subtitle: "A power distribution PCB to take an 8S lithium battery voltage and convert to regulated +24V, +12V, and +5V supplies. \
                Capable of converting up to 200W from the battery. Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["Power", "Battery", "PCB", "Michigan Hyperloop"]
    , date: moment("20180415")
    , route: "/projects/hyperloop/pdpcb"
    },
    { title: "Michigan Hyperloop - Interface PCB"
    , subtitle: "A PCB that interfaces digital signals between modules from the high and low power systems.   \
                Additionally, this board houses drivers for the braking solenoids and high voltage contactors. Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["PCB", "Michigan Hyperloop"]
    , date: moment("20180421")
    , route: "/projects/hyperloop/interface"
    },
    { title: "Michigan Hyperloop - Precharge PCB"
    , subtitle: "A PCB that interfaces the contactor drivers to the pod contactors and switches the high voltage bus through a precharge resistor upon energizing the motor controller. \
                Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["High Voltage", "PCB", "Michigan Hyperloop"]
    , date: moment("20180423")
    , route: "/projects/hyperloop/precharge"
    },
    { title: "Michigan Hyperloop"
    , subtitle: "Michigan Hyperloop was a student-operated engineering design team that existed from Fall 2016 to December 2019. We designed, manufactured, built, and tested \
                a hyperloop pod to compete in the annual SpaceX Hyperloop Pod Competition. "
    , tags: ["Michigan Hyperloop"]
    , date: moment("20170901")
    , thumbnail: pod
    , route: "/projects/hyperloop"
    },
    { title: "EECS 311 - Design & Simulation of a 3-stage BJT Amplifier"
    , subtitle: "A 3-stage BJT amplifier consisting of 2 common emitter stages and 1 emitter follower output stage. Designed by hand and simulated in LTSpice for \
                the final project of EECS 311 - Analog Circuits during the Winter 2020 semester."
    , tags: ["Class project", "BJT","EECS311", "LTSpice"]
    , date: moment("20200428")
    , route: "/projects/bjt-amplifier"
    , thumbnail: bjt
    }
];

export { backpacking, projects };