import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Devices from './Devices';
import CreateDevices from './CreateDevices';

const DevicePage = () => {

    let myState = useSelector((state)=> state.showDevices );
    console.log(myState);
    
    let [devname,setDevName] = useState('');
    let onselect = (dev) => {
        setDevName(dev);
        console.log(dev);
    }
    return (
        <>
            { myState ? <Devices devname={devname}/> : <CreateDevices onselect={onselect}/>}
        </>
  )
}

export default DevicePage;