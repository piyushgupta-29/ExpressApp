import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Devices from './Devices';
import CreateDevices from './CreateDevices';
import { MdDeveloperBoard } from "react-icons/md";

const DevicePage = () => {

    let myState = useSelector((state)=> state.showDevices );
    console.log(myState);
    
    let [devname,setDevName] = useState('');
    let onselect = (dev) => {
        setDevName(dev);
    }

    return (
        <> 
            { myState.length ? myState.map((devname)=> { return <Devices devname={devname}/> } ): 
            <div className='d-flex justify-content-center'>
                <div className='devices'>
                    <MdDeveloperBoard className='developer_board'/>
                    <h3>There are no devices created</h3>
                    <p>Click the button below to start sending dots to your first Device and begin to unlock the value of your data</p>
                    <CreateDevices onselect={onselect}/>
                </div>
            </div>
            }
        </>
  )
}

export default DevicePage;