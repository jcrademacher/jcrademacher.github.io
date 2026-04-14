import { Link } from 'react-router-dom'

import '../sass/content.scss'

function ContentListItem({ mobile, to, thumbnail, title, subtitle, tags, date }) {
    if (!mobile) {
        const imgStyle = {
            width: 150,
            height: 150,
            minWidth: 150,
            minHeight: 150
        };

        return (
            <Link className="bare" to={to}>
                <div className="project-item-container">
                    <div className="project-item">
                        <div className="project-preview">
                            <img src={thumbnail} style={imgStyle} className="thumbnail"/>
                            <div className="title">
                                <div className="heading">{title}</div>
                                <div className="subheading">{subtitle}</div>
                                <div className="subheading tags"><i>{tags ? tags.join(", ") : ""}</i></div>
                            </div>
                        </div>
                        <div className="date">
                            <i>{date ? date.format("MM/DD/YY") : ""}</i>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link className="bare" to={to}>
            <div className="project-item-container">
                <img src={thumbnail} className="thumbnail mobile"/>
                <div className="heading">{title}</div>
                <div className="title">
                    <div className="subheading">{subtitle}</div>
                </div>
                <br/>
                <div className="date">
                    <div><i>{tags ? tags.join(", ") : ""}</i></div>
                    <i>{date ? date.format("MM/DD/YY") : ""}</i>
                </div>
            </div>
        </Link>
    );
}

function TableOfContentsWrapper({ children }) {
    return (
        <div className="table-of-contents-container">
            <h3>Table of Contents</h3>
            <div className="contents">
                {children}
            </div>
        </div>
    );
}

function TableOfContentsHeading({ elementId, title, children }) {
    return (
        <div>
            <h3>
                <a href={`#${elementId}`}>{title}</a>
            </h3>
            <div className="subheadings">
                {children}
            </div>
        </div>
    );
}

function TableOfContentsSubheading({ elementId, title }) {
    return (
        <h4>
            <a href={`#${elementId}`}>{title}</a>
        </h4>
    );
}

export { TableOfContentsHeading, TableOfContentsSubheading, TableOfContentsWrapper, ContentListItem };
