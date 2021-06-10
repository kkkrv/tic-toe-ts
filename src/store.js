import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

const initialStore = {
    history: [Array(9).fill(null)],
    stepNumber: 0,
    xIsNext: true,
}

function reducer(store = initialStore, action) {
    switch (action.type) {
        case 'makeMove':
            return {
                history :[ ...action.payload.timeInHistory, action.payload.squares ],
                stepNumber: action.payload.timeInHistory.length,
                xIsNext: !store.xIsNext,
            }
        case 'goToStep':
            return {
                history: store.history,
                stepNumber: action.payload,
                xIsNext: !action.payload % 2,
            }
        default:
            return initialStore;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        tictoe: reducer,
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;