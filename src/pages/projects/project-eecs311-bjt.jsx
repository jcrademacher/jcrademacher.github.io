import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import headerImage from '../../media/bjt_amp/bjt_amp_thumb.png'
import thumbnail from '../../media/bjt_amp/bjt_amp_thumb.png?thumbnail'
import moment from 'moment';

export default function EECS311BJT() {
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
    title: "EECS 311 - Design & Simulation of a 3-stage BJT Amplifier"
    , subtitle: "A 3-stage BJT amplifier consisting of 2 common emitter stages and 1 emitter follower output stage. Designed by hand and simulated in LTSpice for \
                the final project of EECS 311 - Analog Circuits during the Winter 2020 semester."
    , tags: ["Class project", "BJT","EECS311", "LTSpice"]
    , date: moment("20200428")
    , route: "/bjt-amplifier"
    , thumbnail
    , headerImage
    , priority: 8
}
