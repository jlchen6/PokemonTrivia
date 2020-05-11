import React, { Component } from "react";
import API from "../utils/API"

class GameMode extends Component {

    state = {
        gameQuestions: [],
        currQ: 0,
        error: ""
    }

    componentDidMount() {
        API.getRandom(5)
            .then(res =>
                this.setState({
                    gameQuestions: res.data
                })
            )
            .catch(err => this.setState({error: "Could not generate random pokemon"}))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default GameMode;