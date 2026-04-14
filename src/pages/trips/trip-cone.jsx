import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import headerImage from '../../media/cone_peak/cone_peak_thumb.jpeg'
import thumbnail from '../../media/cone_peak/cone_peak_thumb.jpeg?thumbnail'
import moment from 'moment';

export default function ConePeak() {
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
    title: "Cone Peak via Highway 1"
    , subtitle: "Beginning at the trailhead immediately across from Kirk Creek state park, we hiked 10.5 miles to the peak, then descended back to Ventura campground for the night."
    , location: "Big Sur, CA"
    , date: moment("20190601")
    , thumbnail
    , headerImage
    , route: "/cone-peak"
    , tags: []
}
