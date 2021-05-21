import React, { Component } from "react";
import {LinkedNews} from "./LinkedNews";
import {StandartNews} from "./StandartNews";


export class NewsBlock extends Component {
    render() {
        if (this.props.link !== null)
            return <LinkedNews {...this.props} />
        return <StandartNews {...this.props} />;
    }
}
