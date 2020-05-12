import React from "react";
import { List, ListItem } from "../List";
import Button from "../Button/button";

function Choices(props){
    return (
        <List>
            {props.choices.map(choice => (
                <ListItem key={choice}>
                    <Button onClick={props.onClick} value={choice} > {choice} </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default Choices;