import React, { Component } from "react";
import {NewsBody} from "./NewsBody";


export class LinkedNews extends Component {
    render() {
        const style = { textDecoration: 'none',color: 'blue'};
        if (this.props.isSpecial)
            style.color = 'green';
        return (
            <div style={{marginBottom: '.5rem'}}>
                <a href={this.props.link} target="_blank" rel="noreferrer" style={style}>
                    <NewsBody {...this.props} />
                </a>
            </div>
        );

    }
}
