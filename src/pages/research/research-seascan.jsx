import headerImage from '../../media/seascan/seascan.png';
import thumbnail from '../../media/seascan/seascan.png?thumbnail';
import moment from 'moment';

function Seascan() {
    return (
        <div>
        </div>
    );
}

export default Seascan;

export function TableOfContents() {
    return <div></div>;
}

export const metadata = { 
    title: "SeaScan: An Energy-Efficient Underwater Camera for Wireless 3D Color Imaging"
    , subtitle: `We present the design, implementation, and evaluation of SeaScan, 
    an energy-efficient camera for 3D imaging of underwater environments. At the core of SeaScan's design is a 
    trinocular lensing system, which employs three ultra-low-power monochromatic image sensors to reconstruct color
     images. Each of the sensors is equipped with a different filter (red, green, and blue) for color capture. 
     The design introduces multiple innovations to enable reconstructing 3D color images from the captured
      monochromatic ones. This includes an ML-based cross-color alignment architecture to combine the monochromatic 
      images. It also includes a cross-refractive compensation technique that overcomes the distortion of the 
      wide-angle imaging of the low-power CMOS sensors in underwater environments. 
      We built an end-to-end prototype of SeaScan, including color filter integration, 3D reconstruction, 
      compression, and underwater backscatter communication. Our evaluation in real-world underwater environments 
      demonstrates that SeaScan can capture underwater color images with as little as 23.6 mJ, which represents 
      37X reduction in energy consumption in comparison to the lowest-energy state-of-the-art underwater imaging system. 
      We also report qualitative and quantitative evaluation of SeaScan's color reconstruction and demonstrate its 
      success in comparison to multiple potential alternative techniques (both geometric and ML-based) in the literature. 
      SeaScan's ability to image underwater environments at such low energy opens up important applications in long-term 
      monitoring for ocean climate change, seafood production, and scientific discovery.`
    , tags: ["Research", "Underwater Backscatter", "Camera", "3D Imaging", "Color Imaging"]
    , date: moment("20241204")
    , thumbnail
    , headerImage
    , doi: "https://doi.org/10.1145/3636534.3690661"
    , route: "/seascan"
    , priority: 15
}
