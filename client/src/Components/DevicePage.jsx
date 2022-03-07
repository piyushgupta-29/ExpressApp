import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import CreateDevices from './CreateDevices';
import Devices from './DevicePage'

const DevicePage = () => {

    let myState = useSelector((state)=> state.showDevices );
    console.log(myState);
    // useEffect(() => {
        
    // },[myState]);
    
    return (
        <>
            {/* { myState ?  : <CreateDevices />} */}
        </>
  )
}

export default DevicePage;