import React from "react";

export function Question(props){
    return (
        <div style={props.style} >
            {props.children}
        </div>
    )
}