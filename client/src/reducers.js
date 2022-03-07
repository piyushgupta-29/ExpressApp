import { combineReducers } from 'redux'
let totalDevices = 1;

export let showDevices = (state=totalDevices,action) => {
    switch(action.type)
    {
        case "INCR": return state+1;
        case "DECR": return state-1;
        default: return state;
    }
}

let rootReducer = combineReducers({
    showDevices
})

export default rootReducer;