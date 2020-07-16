import pod from './media/pod_thumb.png'
import scoreboard from './media/scoreboard_thumb.jpg'
import audio1 from './media/audio_music1_thumb.jpg'
import audio2 from './media/audio_music2_thumb.jpg'
import bjt from './media/bjt_amp_thumb.png'

var moment = require('moment'); 

const backpacking = [
    { title: "Cone Peak via Highway 1"
    , location: "Big Sur, CA"
    , route: "/backpacking/cone-peak"
    },
    { title: "Yosemite National Park via Chiquito Trailhead"
    , location: "Bass Lake, CA"
    , route: "/backpacking/yosemite"
    },
    { title: "Death Valley & Telescope Peak"
    , location: "Inyo County, CA"
    , route: "/backpacking/telescope"
    },
    { title: "Humboldt Peak via South Colony Lakes Trailhead"
    , location: "Westcliffe, CO"
    , route: "/backpacking/humboldt"
    },
    { title: "Franconia Ridge & Thirteen Falls"
    , location: "Lincoln, NH"
    , route: "/backpacking/franconia-ridge"
    }
];

const projects = [
    { title: "LED Hockey Scoreboard"
    , subtitle: "A RaspberryPi & Arduino Uno based wireless scoreboard for a backyard ice rink. Capable of displaying \
                 a game clock, home score, and away score using white & RGB LEDs. Controllable from a mobile web app over WiFi.\
                "
    , tags: ["RaspberryPi 3", "Arduino Uno", "WS2812", "Python", "C/C++", "LED", "Build", "PCB"]
    , date: moment("20171212")
    , thumbnail: scoreboard
    , route: "/projects/scoreboard"
    },
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
                A custom PCB takes performs an FFT from a 3.5mm jack or an electret microphone. \
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