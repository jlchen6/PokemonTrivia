import React, { createContext, useReducer, useContext } from "react";

const GameContext = createContext({
    gameQuestions: [],
    currQ: 0,
    userScore: 0,
    gameEnd = false
});

const { Provider } = GameContext;

function reducer(state, action) {

    // If the next question is not the last question, add to the score and increment the question counter 
    if (state.currQ < state.gameQuestions.length -1) {
        return [...state, {
            currQ: state.currQ + 1,
            userScore: state.userScore + action.bonus
        }]
    }
    // Otherwise, raise a flag to end the game, and add the last score bonus
    else {
        return [...state, {
            userScore: state.userScore + action.bonus,
            gameEnd: true
        }]
    }

}

function GameProvider({value = [], ...props}) {
    const[state, dispatch] = useReducer(reducer, []);
    return <Provider value={[state, dispatch]} {...props} />;
}

function useGameContext() {
    return useContext(GameContext)
}

export {GameProvider, useGameContext};
