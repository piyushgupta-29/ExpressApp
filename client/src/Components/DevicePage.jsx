import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Devices from './Devices';
import CreateDevices from './CreateDevices';
import { MdDeveloperBoard } from "react-icons/md";
import axios from 'axios';

const DevicePage = () => {

    let myState = useSelector((state)=> state.showDevices );
    let dispatch = useDispatch();

    let [devices,setDevices] = useState();
    useEffect( async () => {
        let res = await axios.get('/api/getDevices');
        setDevices(res.data);
    },[devices]);
    // console.log(devices);
    return (
        <> 
            <div className='container d-flex justify-content-end'>
                <CreateDevices btn={1} className='createdevice'/>
            </div>
            {   devices !==undefined && devices.length > 0 ? 
                <div className="container">
                    <div className="row">
                        {devices.map((devname) => { 
                        return ( 
                            <div className='col-md-4' key={devname._id}>
                                <Devices devname={devname.name} id={devname._id} vars={devname.var_names.length}/>
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