import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";

const Devices = (props) => {

    let [device,setDevice] = useState('');
    let dispatch = useDispatch();

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <div className='device_title d-flex'>
                    <p style={{ color: "white", fontSize: "1.5rem", alignSelf: "flex-end", paddingLeft: "1rem"}}>{props.devname}</p>
                </div>
                <div className="card-body">
                    <span className="card-text">0 Variables</span>
                    <MdDelete style={{ fontSize: "2rem",color: "rgb(0,0,0,.5)", marginLeft: "7rem" }} />
                </div>
            </div>
        </>
  )
}

export default Devices;