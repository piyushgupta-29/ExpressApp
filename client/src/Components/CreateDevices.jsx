import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { MdDeveloperBoard } from "react-icons/md";
import { addDevice } from '../action';

const CreateDevices = (props) => {

    let [device,setDevice] = useState('');
    let dispatch = useDispatch();

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='devices'>
                    <MdDeveloperBoard className='developer_board'/>
                    <h3>There are no devices created</h3>
                    <p>Click the button below to start sending dots to your first Device and begin to unlock the value of your data</p>
                    {/* <button type="button" class="btn rounded-pill btn-outline-primary">Create Device</button> */}
                    <button className="btn btn-outline-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Create Device</button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="card mb-2">
                            <div className="card-body">
                                <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Blank Device
                                </button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add New Device</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <label htmlFor="device_name">Device name</label><br />
                                        <input type="text" name="device_name" value={device} onChange={(e)=>{ setDevice(e.target.value) } }  style={{ width: "100%" }}/><br />
                                        <label htmlFor="device_label">Device Label</label><br />
                                        <input type="text" name="device_label" value={device} style={{ textTransform: "lowercase",width: "100%" }} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" 
                                        data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { dispatch( addDevice() ); props.onselect(device); }}>
                                            Add Device
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-2">
                            <div className="card-body">
                                Arduino
                            </div>
                        </div>
                        <div className="card mb-2">
                            <div className="card-body">
                                Alorium Technology
                            </div>
                        </div>
                        <div className="card mb-2">
                            <div className="card-body">
                                Controllino
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default CreateDevices;