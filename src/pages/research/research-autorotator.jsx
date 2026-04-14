import headerImage from '../../media/autorotator/autorotator.png';
import thumbnail from '../../media/autorotator/autorotator.png?thumbnail';
import render from '../../media/autorotator/render.png';
import moment from 'moment';

function Autorotator() {
    return (
        <div>
            <p>
                While not a research project, the "Autorotator" is a piece of test equipment I designed and built for
                the Van Atta Acoustic Backscatter (VAB) project that rotates acoustic arrays in the water for angular tests. 
                It consists of a stepper motor, a belt driven shaft, and a frame that keeps the stepper motor away from the dock edge during tests (windy days can be rough!). 
                The stepper motor is controlled over ethernet (TCP) from a custom command line interface that I wrote in C++. 
                This program communicates with the motor using ASCII commands conforming to the eSCL protocol. 
                This code is available <a href="https://github.com/jcrademacher/autorotator">on GitHub here</a>.
            </p>
            <p>
                The autorotator has been invaluable for automated testing of both VAB and acoustic arrays used in future projects. 
                It allows us to simply run a command that automatically rotates the array to a desired orientation and then collects acoustic results. 
                Before the autorotator, we were manually rotating arrays!
            </p>
            <p>
                I designed the autorotator in SolidWorks. The frame is composed of standard 8020 rods. 
                A notable piece of the design is the 7/8" stainless steel D profile shaft that drives the equipment underwater. 
                It is way too large for the application, but actually has been helpful in holding up heavy arrays in the air before we put them in the water. 
                There are corrosion resistance ceramic bearings on the shaft that keep it spinning smoothly even when exposed to salt water. 
            </p>
            <p>
                A render of the assembly in solidworks is shown below.
            </p>
            <p>
                <img alt="Render of the autorotator assembly" align="center" src={render} style={{width: "30%"}}/>
            </p>
        </div>
    );
}

export default Autorotator;

export function TableOfContents() {
    return <div></div>;
}

export const metadata = { 
    title: "Autorotator",
    subtitle: "The autorotator is a piece of test equipment that rotates acoustic arrays in the water using a stepper motor for angular tests."
    , tags: ["Test Equipment", "Mechanical Design"]
    , date: moment("20220917")
    , thumbnail
    , headerImage
    , route: "/autorotator"
    , priority: 15
}
