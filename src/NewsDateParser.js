import React, { Component } from "react";
import moment from 'moment';

export class NewsDateParser extends Component {
    render() {
        const date = moment(this.props.timestamp,"YYYY-MM-DD HH:mm Z");
        return date.format("dddd, MMMM Do YYYY, h:mm:ss a");
    }
}
