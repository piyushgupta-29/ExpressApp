import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Devices from './Devices';
import CreateDevices from './CreateDevices';
import { MdDeveloperBoard } from "react-icons/md";

const DevicePage = () => {

    let myState = useSelector((state)=> state.showDevices );
    
    return (
        <> 
            <div className='container d-flex justify-content-end'>
                <CreateDevices btn={1} className='createdevice'/>
            </div>
            { myState.length ? 
                <div className="container">
                    <div className="row">
                        {myState.map((devname,id) => { 
                        return ( 
                            <div className='col-md-4'>
                                <Devices devname={devname.dev_name} key={id} id={id}/>
                            </div>  
                        )} )}
                    </div>
                </div>
                :
                <div className='d-flex justify-content-center'>
                    <div className='devices'>
                        <MdDeveloperBoard className='developer_board mb-3'/>
                        <h3>There are no devices created</h3>
                        <p>Click the button below to start sending dots to your first Device and begin to unlock the value of your data</p>
                        <CreateDevices btn={0}/>
                    </div>
                </div>
            }
        </>
  )
}

export default DevicePage;