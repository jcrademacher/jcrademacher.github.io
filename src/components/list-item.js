import React from 'react';

import '../sass/projects.scss'

function ListItem(props) {
    if(!props.mobile) {
        var imgStyle = {
            width: 150,
            height: 150,
            minWidth: 150,
            minHeight: 150
        }

        return (
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
        );
    }
    else {
        return (
            <div>
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
            </div>
        );
    }
}

export default ListItem;