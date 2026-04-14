import headerImage from '../../media/vanatta/4x2_arr_labeled.png';
import thumbnail from '../../media/vanatta/4x2_arr_labeled.png?thumbnail';
import moment from 'moment';

function VanAtta() {
    return (
        <div>
            <p>
                This project was my first first-authorship paper, and we showed a remarkable range improvement for underwater backscatter with 150 meters of range at the MIT sailing
                pavilion. In fact, this range was actually limited by the length of the sailing pavilion dock, you can see in our results that we get about e-3 to e-2
                BER at 150 meters, indicating we can get more range at slightly higher BER.
            </p>
            <p>
                The van atta array is an architecture that has been around since the early 1940s. It was first invented by Lester Van Atta as a retroreflector for both radio and acoustic systems. 
                It works by essentially conjugating the phase of the retransmitted signal so that the retransmitted signal adds coherently in the direction that the original signal comes from. 
                What we did is bring this architecture to underwater backscatter and enable it to communicate digital data on the backscatter uplink and greatly improve the range. We showed a 15x range
                improvement over previous underwater backscatter systems, showing for the first time that underwater backscatter is practical for coastal deployments. 
            </p>
            <p>
                My contributions included the theoretical analysis of the van atta backscatter array, the design and implementation of the associated switching circuitry and custom printed circuit board, 
                the manufacturing of the piezoelectric transducers and the full array itself, and the fixturing and testing of the array across range, bit rate, and rotations. 
            </p>
        </div>
    );
}

export default VanAtta;

export function TableOfContents() {
    return <div></div>;
}

export const metadata = { 
    title: "Enabling Long Range Underwater Backscatter via Van Atta Acoustic Networks [ACM SIGCOMM '23]"
    , subtitle: `We present the design, implementation, and evaluation of Van Atta Acoustic Backscatter (VAB), 
                a technology that enables long-range, ultra-low-power networking in underwater environments. 
                At the core of VAB is a novel, scalable underwater backscatter architecture that bridges recent advances 
                in RF backscatter (Van Atta architectures) with ultra-low-power underwater acoustic networks. 
                Our design introduces multiple innovations across the networking stack, which enable it to overcome unique challenges 
                that arise from the electro-mechanical properties of underwater backscatter and the challenging nature of low-power underwater acoustic channels. 
                We implemented our design in an end-to-end system, and evaluated it in over 1,500 real-world experimental trials in a river and the ocean. 
                Our evaluation in stationary setups demonstrates that VAB achieves a communication range that exceeds 300m in round trip backscatter across orientations (
                    at BER of 10e-3). We compared our design head-to-head with past state-of-the-art systems, demonstrating a 15x 
                    improvement in communication range at the same throughput and power. 
                    By realizing hundreds of meters of range in underwater backscatter, this paper presents the first practical system capable of coastal monitoring applications. 
                    Finally, our evaluation represents the first experimental validation of underwater backscatter in the ocean.`
    , tags: ["Research", "Underwater Backscatter", "Van Atta", "Long Range"]
    , date: moment("20230901")
    , thumbnail
    , headerImage
    , doi: "https://doi.org/10.1145/3603269.3604814"
    , event: "ACM SIGCOMM '23: Proceedings of the ACM SIGCOMM 2023 Conference"
    , route: "/vanatta"
    , priority: 15
}
