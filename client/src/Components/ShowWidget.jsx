import React from "react";
import Offcanvas from './Offcanvas';
import { FaPlus } from "react-icons/fa";
import Charts from "./Charts";
import { useState } from "react";

const ShowWidget = () => {
    let [flag,setFlag] = useState(false); 
    let [topic,setTopic] = useState('');
    let [type,setType] = useState('');

    let getBool = (x,t,ty) => {
        setFlag(x);
        setTopic(t);
        setType(ty);
    }
    return (
        <>
            {
            flag ? <Charts topic={topic} type={type}/>: 
            <div className="add-widget">
                <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <FaPlus />
                </button>
                <p>Add New Widget</p>
            </div>
            }
            <Offcanvas topic={topic} getBool={getBool}/>
        </>
    );
}

export default ShowWidget;