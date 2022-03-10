import { combineReducers } from 'redux'

let totalDevices = [
    
];
let totalLabels = [];
let totalThresholds = [];


export let showDevices = (state=totalDevices,action) => {
    switch(action.type)
    {
        case "ADD_DEVICE": 
        return [
        ...state, action.payload
        ]
        
        case "REMOVE_DEVICE": 
        let a = state.slice(0,action.payload);
        let b = state.slice(action.payload+1);
        return a.concat(b);
        
        default: return state;
    }
}

export let showLabels = (state=totalLabels,action) => {
    switch(action.type)
    {
        case "ADD_LABEL": 
        return [
            ...state,action.payload
        ]

        default: return state;
    }
}

export let showThresholds = (state=totalThresholds,action) => {
    switch(action.type)
    {
        case "ADD_THRESHOLD": 
        return [
            ...state,action.payload
        ]

        default: return state;
    }
}

let rootReducer = combineReducers({
    showDevices,
    showLabels,
    showThresholds
})

export default rootReducer;