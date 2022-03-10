import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { removeDevice } from '../action';

const Devices = (props) => {
    console.log(props.id);
    let dispatch = useDispatch();
    let path = `/variables/${props.devname}`;
    return (
        <div className='container mt-5'>
            <div className="card mb-3" style={{width: "18rem"}}>
                <a href={path} style={{ textDecoration: "none"}}>
                    <div className='device_title d-flex'>
                        <p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>{props.devname}</p>
                    </div>
                </a>
                <div className="card-body">
                    <span className="card-text">0 Variables</span>
                    <MdDelete style={{ fontSize: "2rem",color: "rgb(0,0,0,.5)", marginLeft: "7rem" }} onClick={() => { dispatch( removeDevice(props.id) ) }}/>
                </div>
            </div>
        
        </div>
  )
}

export default Devices;