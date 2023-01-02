import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import '../sass/content.scss'

var path = require('path');

function ContentListItem(props) {
   // var onClick = () => history.push(props.route);

    if(!props.mobile) {
        var imgStyle = {
            width: 150,
            height: 150,
            minWidth: 150,
            minHeight: 150
        }

        return (
            <Link className="bare" to={props.to}>
                <div className="project-item-container">
                    <div className="project-item">
                        <div className="project-preview">
                            <img src ={props.thumbnail} style={imgStyle} className="thumbnail"/>
                            <div className="title">
                                <div className="heading">{props.title}</div>
                                <div className="subheading">{props.subtitle}</div>
                                <div className="subheading tags"><i>{props.tags ? props.tags.join(", ") : ""}</i></div>
                            </div>
                        </div>
                        <div className="date">
                            <i>{props.date ? props.date.format("MM/DD/YY") : ""}</i>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
    else {
        return (
            <Link className="bare" to={props.to}>
                <div className="project-item-container">
                    <img src={props.thumbnail} className="thumbnail mobile"/>
                    <div className="heading">{props.title}</div>
                    <div className="title">
                        <div className="subheading">{props.subtitle}</div>
                    </div>
                    <br/>
                    <div className="date">
                        <div><i>{props.tags ? props.tags.join(", ") : ""}</i></div>
                        <i>{props.date ? props.date.format("MM/DD/YY") : ""}</i>
                    </div>
                </div>
            </Link>
        );
    }
}

function TableOfContentsWrapper(props) {
    return (
        <div className="table-of-contents-container">
            <h3>Table of Contents</h3>
            <div className="contents">
                {props.children}
            </div>
        </div>
    );
}

function TableOfContentsHeading(props) {
    return (
        <div>
            <h3>
                <HashLink to={`#${props.elementId}`}>{props.title}</HashLink>
            </h3>
            <div className="subheadings">
                {props.children}
            </div>
        </div>
    );
}

function TableOfContentsSubheading(props) {
    return (
        <h4>
            <HashLink to={`#${props.elementId}`}>{props.title}</HashLink>
        </h4>
    );
}

export { TableOfContentsHeading, TableOfContentsSubheading, TableOfContentsWrapper, ContentListItem };