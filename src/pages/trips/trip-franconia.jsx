import { TableOfContentsWrapper, TableOfContentsHeading, TableOfContentsSubheading } from '../../components/content-list'
import headerImage from '../../media/franconia/franconia_ridge_thumb.jpeg'
import thumbnail from '../../media/franconia/franconia_ridge_thumb.jpeg?thumbnail'
import moment from 'moment';

export default function Franconia() {
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
    title: "Franconia Ridge & Thirteen Falls"
    , location: "Lincoln, NH"
    , subtitle: "This route is basically the first half of the pemigewasset loop. We took franconia ridge on the first day and summited Mt. Flume, Mt. Liberty, Mt. Lincoln, Mt. Lafayette \
                    and Mt. Garfield. We stayed the night at the Garfield AMC site and then hiked down into the valley along franconia brook and through thirteen falls. "
    , date: moment("20200705")
    , thumbnail
    , headerImage
    , route: "/franconia-ridge"
    , tags: []
}
