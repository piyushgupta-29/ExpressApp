import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addDevice } from '../action';
import { FaPlus } from 'react-icons/fa'
import { AiOutlineControl,AiFillRobot } from 'react-icons/ai'
import { DiHtml5DeviceAccess,DiRasberryPi } from 'react-icons/di'
import { SiArduino,SiAdafruit } from 'react-icons/si'
import axios from 'axios';

const CreateDevices = (props) => {

    let [device,setDevice] = useState('');
    let dispatch = useDispatch();
    let str = 'Create Device';
    let myfunc =async () => {
        console.log('clicked');
        let res = await axios.post('/api/addDevice',{device});
        console.log(res);  
    }
    return (
        <div className='mt-3'>
            <button className="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                { props.btn ? <FaPlus style={{ fontSize: "13px" }}/> : str }
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Add New Device</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-wrap">
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 mx-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem","height": "15rem"}}>
                        <DiHtml5DeviceAccess style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Blank Device
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 mx-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem","height": "15rem"}}>
                        <SiArduino style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Arduino
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 mx-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem","height": "15rem"}}>
                        <SiAdafruit style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Adafruit
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 mx-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem","height": "15rem"}}>
                        <AiOutlineControl style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Controllino
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 mx-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem","height": "15rem"}}>
                        <DiRasberryPi style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Raspberry Pie
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 mx-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem","height": "15rem"}}>
                        <AiFillRobot style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            DF Robot
                        </button>
                    </div>
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="device_name">Device name</label><br />
                            <input type="text" name="device_name" value={device} onChange={(e)=>{ setDevice(e.target.value) } }  style={{ width: "100%" }}/><br />
                            <label htmlFor="device_label">Device Label</label><br />
                            <input type="text" name="device_label" value={device} onChange={()=> {} } style={{ textTransform: "lowercase",width: "100%" }} />
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="offcanvas" onClick={myfunc}>Add Device</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default CreateDevices;