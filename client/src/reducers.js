import { combineReducers } from 'redux'

let totalDevices = [];
let totalCharts = [];

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

        // case "GET_DEVICE":
        // return [...state]

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

        case "REMOVE_VARIABLE":
        let arr3 = [...state]; 
        arr3[action.id].var_names = arr3[action.id].var_names.filter((val,i) => {
          return i !== action.payload
        })
        arr3[action.id].var_units = arr3[action.id].var_units.filter((val,i) => {
           return i !== action.payload
        })
        console.log(arr3);
        return arr3;
        
        default: return state;
    }
}

export let showCharts = (state = totalCharts,action) => {
    switch(action.type)
    {
        case "ADD_CHART": 
        return [
            ...state,action.payload
        ]

        default: return state;
    }
}

let rootReducer = combineReducers({
    showDevices,
    showCharts
})

export default rootReducer;