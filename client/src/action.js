// import axios from 'axios';

export let addDevice = async (data) => {
    // let res = await axios.post('/api/addDevice',{ data });
    return {
        type: "ADD_DEVICE",
        payload: data
    }
}

export let removeDevice = (id) => {
    return {
        type: "REMOVE_DEVICE",
        payload: id
    }
}

// export let getDevices = async () => {
//     let res = await axios.get('/api/getDevices');
//     return {
//         type: "GET_DEVICES",
//         devices: action.payload
//     }
// }

export let addChart = (label,threshold) => {
    return {
        type: "ADD_CHART",
        label: label,
        threshold: threshold
    }
}


export let addVariable = (var_name,id) => {
    return {
        type: "ADD_VARIABLE",
        id: id,
        payload: var_name
    }
}

export let removeVariable = (val,id) => {
    return {
        type: "REMOVE_VARIABLE",
        id: id,
        payload: val
    }
}

export let addUnit = (unit,id) => {
    return {
        type: "ADD_UNIT",
        id: id,
        payload: unit
    }
}

