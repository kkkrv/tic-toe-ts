import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    history: [Array(9).fill(null)],
    stepNumber: 0,
    xIsNext: true,
}

export const movesSlice = createSlice({
    name: 'moves',
    initialState,
    reducers: {
        makeMove(state, action) {
            state.history = [ ...action.payload.timeInHistory, action.payload.squares ];
            state.stepNumber = action.payload.timeInHistory.length;
            state.xIsNext = !state.xIsNext;
        },
        goToStep(state, action) {
            state.stepNumber = action.payload;
            state.xIsNext = !action.payload % 2;
        }
    }
})

export const { makeMove, goToStep } = movesSlice.actions;

export const selectHistory = state => state.moves.history;
export const selectStepNumber = state => state.moves.stepNumber;
export const selectXIsNext = state => state.moves.xIsNext;

export default movesSlice.reducer;