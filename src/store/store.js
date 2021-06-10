import { configureStore } from "@reduxjs/toolkit";
import movesReducer from "./moves/moves.slice"

const store = configureStore({
    reducer: {
        moves: movesReducer
    }
})

export default store;