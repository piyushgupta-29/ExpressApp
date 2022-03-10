import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addDevice } from '../action';
import { FaPlus } from 'react-icons/fa'

const CreateDevices = (props) => {

    let [device,setDevice] = useState('');
    let dispatch = useDispatch();
    let str = 'Create Device';
    let myfunc = () => {
        dispatch( addDevice(device) );    
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
                <div className="offcanvas-body">
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Blank Device
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Arduino
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Alorium Technology
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Controllino
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
                            <input type="text" name="device_label" value={device} style={{ textTransform: "lowercase",width: "100%" }} />
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