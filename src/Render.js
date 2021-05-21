import news from './data/news.json'
import React, { Component } from "react";
import {NewsBlock} from './NewsBlock';


export class Render extends Component {
    render() {
        return (news.map(x => <NewsBlock key={x.id} {...x} />))
    }
}