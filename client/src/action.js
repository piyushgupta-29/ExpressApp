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