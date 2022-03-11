export let addDevice = (data) => {
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

export let addLabel = (label) => {
    return {
        type: "ADD_LABEL",
        payload: label
    }
}

export let addThreshold = (threshold) => {
    return {
        type: "ADD_THRESHOLD",
        payload: threshold
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

