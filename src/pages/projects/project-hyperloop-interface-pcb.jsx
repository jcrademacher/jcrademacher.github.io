import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import headerImage from '../../media/hyperloop/mhype_thumb.jpeg'
import thumbnail from '../../media/hyperloop/mhype_thumb.jpeg?thumbnail'
import moment from 'moment';

export default function HyperloopInterfacePCB() {
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
    title: "Michigan Hyperloop - Interface PCB"
    , subtitle: "A PCB that interfaces digital signals between modules from the high and low power systems.   \
                Additionally, this board houses drivers for the braking solenoids and high voltage contactors. Designed for Michigan Hyperloop in 2017. \
                "
    , tags: ["PCB", "Michigan Hyperloop"]
    , date: moment("20180421")
    , route: "/hyperloop/interface"
    , thumbnail
    , headerImage
    , priority: 0
}
