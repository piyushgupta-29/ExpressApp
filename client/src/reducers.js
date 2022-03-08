import { combineReducers } from 'redux'

let totalDevices = [];
let state = [
    ...totalDevices
];

export let showDevices = (state=totalDevices,action) => {
    switch(action.type)
    {
        case "INCR": 
        return [
        ...state, action.payload
        ]
        case "DECR": 
        return [  
            ...state, state.filter(todo => todo.id !== action.payload) 
        ]
        default: return state;
    }
}

let rootReducer = combineReducers({
    showDevices
})

export default rootReducer;