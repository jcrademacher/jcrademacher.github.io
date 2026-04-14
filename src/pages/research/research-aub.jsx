import headerImage from '../../media/aub/nature_fig1_real_alt3.png';
import thumbnail from '../../media/aub/nature_fig1_real_alt3.png?thumbnail';
import moment from 'moment';

function AUB() {
    return (
        <div>
        </div>
    );
}

export default AUB;

export function TableOfContents() {
    return <div></div>;
}

export const metadata = { 
    title: "Analog Underwater Backscatter: Networked Underwater Sensing at Microwatt Power Levels"
    , subtitle: `Wireless sensing in underwater environments is essential for applications in oceanography, climate science, and
infrastructure monitoring. However, existing underwater wireless systems remain power-hungry and unsuitable for
long-term deployments due to the high energy cost of communication and sensing. Here we report analog underwater
backscatter (AUB), a low-power wireless sensing technology that encodes sensor data directly in the physical layer via
analog frequency modulation. AUB operates at microwatt-level power and enables continuous sensing from battery-
powered devices submerged underwater. The system incorporates a cross-doppler inversion approach that enables
it to invert the challenging doppler effect on underwater analog backscatter signals. AUB also introduces a hybrid
analog-ripple wake-up mechanism that allows for sub-microwatt standby operation. We demonstrate an end-to-end
prototype in a river setting, achieving an average power consumption of 3.51 uW - 77x lower than previous underwater
backscatter systems. The platform supports real-time sensing of oceanographic vitals, including water temperature
and depth, and opens the door to scalable, persistent, and low-power monitoring in marine environments.`
    , tags: ["Research", "Underwater Backscatter", "Analog Backscatter", "Sensing"]
    , date: moment("20240410")
    , thumbnail
    , headerImage
    , route: "/aub"
    , priority: 15
}
