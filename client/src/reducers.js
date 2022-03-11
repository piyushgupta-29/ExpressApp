import { combineReducers } from 'redux'

let totalDevices = [];
let totalLabels = [];
let totalThresholds = [];

export let showDevices = (state = totalDevices,action) => {
    switch(action.type)
    {
        case "ADD_DEVICE": 
        return [
        ...state, { dev_name : action.payload }
        ]
        
        case "REMOVE_DEVICE": 
        let a = state.slice(0,action.payload);
        let b = state.slice(action.payload+1);
        return a.concat(b);

        case "ADD_VARIABLE":
        let arr1 = [...state];
        arr1[action.id].var_names = arr1[action.id].var_names ? 
            [...arr1[action.id].var_names,action.payload ] : [action.payload]  
        return arr1;

        case "ADD_UNIT":
        let arr2 = [...state];
        arr2[action.id].var_units = arr2[action.id].var_units ? 
            [...arr2[action.id].var_units,action.payload ] : [action.payload]  
        return arr2;

        // case "REMOVE_VARIABLE":
        // let arr3 = [...state]; 
        // // arr3[action.id].var_names.filter((val,i) => {
        // //     i !== action.payload
        // // })
        // // arr3[action.id].var_units.filter((val,i) => {
        // //     i !== action.payload
        // // })
        // // console.log(arr3);
        // return arr3;
        
        default: return state;
    }
}

export let showLabels = (state = totalLabels,action) => {
    switch(action.type)
    {
        case "ADD_LABEL": 
        return [
            ...state,action.payload
        ]

        default: return state;
    }
}

export let showThresholds = (state = totalThresholds,action) => {
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