import { createStore } from 'redux'

// https://redux.js.org/api/createstore

// reducer

const initialState = ["user Redux", "learn redux"];

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let newState = [
                ...state,
                action.text
            ]
            return newState
        case 'CLEAR_ALL':
            // make the list empty again
            return []
        default:
            return state
        case 'UPDATE_VALUE': // I am not sure if I should create a new case or change the 'ADD_TODO'
            let updateState = [
                ...state,
                action.value
            ]
            return updateState
    }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
