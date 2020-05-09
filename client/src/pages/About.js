import React, { Component } from "react"
import { Container, Row, Col } from "../components/Grid"
class About extends Component {


    render() {
        return (<Container>
            <Row>
                <Col size="md-5 sm-9">
                    <h1>About the Game</h1>
                    <p>
                        This is a pokemon trivia game meant to test your knowledge on pokemon! Up to 6 players can play at once, competing against the timer to correctly guess the pokemon.
                    </p>
                </Col>
                <Col size="md-5 sm-9">
                    <h1>How to Play</h1>
                    <p>
                        To get started, log in on the main page. After logging in, you can start or enter a game session.
                    </p>
                </Col>
            </Row>
        </Container>)
    }


}

export default About;