import React from "react";

export function Question(props){
    return (
        <div>
            <h2>Name this Pokemon!</h2>
            {props.children}
        </div>
    )
}