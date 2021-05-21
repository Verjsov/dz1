import React, { Component } from "react";
import {NewsDateParser} from "./NewsDateParser";

export class NewsBody extends Component {
    render() {
        return (
            <div style={{width: '85%',margin: 'auto',border: '1px solid black'}}>
                <p style={{textAlign: 'left'}}><NewsDateParser timestamp={this.props.dateCreated} /></p>
                <p style={{fontWeight: 'bold',textAlign: 'left',margin: 'unset'}}>Author: {this.props.author}</p>
                {this.props.isSpecial ? <p style={{textAlign: 'right',margin: 'unset'}}>Extra News</p> : ''}
                <p style={{fontWeight: 'bold'}}>{this.props.title}</p>
                {this.props.photo !== null ? <img src={this.props.photo}  alt="" /> : ''}
                <div dangerouslySetInnerHTML={{__html:this.props.content}} />
                {
                    this.props.categories.length > 0
                        ?   <ul>
                                <p style={{margin: 'unset'}}>Categories:</p>
                                {this.props.categories.map(x => <li>{x.name}</li>)}
                            </ul>
                        : ''
                }
            </div>
        );

    }
}
