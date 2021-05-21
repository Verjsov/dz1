import React, { Component } from "react";
import {NewsBody} from "./NewsBody";


export class StandartNews extends Component {
    render() {
        return (
            <div style={{marginBottom: '.5rem'}}>
                <NewsBody {...this.props} />
            </div>
        );
    }
}
