export let addDevice = (data) => {
    return {
        type: "INCR",
        payload: data
    }
}

export let removeDevice = (data) => {
    return {
        type: "DECR",
        payload: data
    }
}