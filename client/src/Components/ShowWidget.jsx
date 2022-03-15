import React, { useEffect } from "react";
import Offcanvas from './Offcanvas';
import { FaPlus } from "react-icons/fa";
import Charts from "./Charts";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ShowWidget = () => {
    let [type,setType] = useState('');

    let [charts,setCharts] = useState();
    useEffect( async () => {
        let res = await axios.get('/api/getCharts');
        console.log(res);
        setCharts(res.data);
    },[]);
    console.log(charts);
    return (
        <>
            
            <div className="container mt-2 d-flex justify-content-end">
                <Offcanvas />
            </div>
            {
                charts !==undefined ? charts.map((val) =>
                    <div className="container d-flex" key={val._id}>
                        <Charts topic={val.topic} labels={val.labels} thresholds={val.thresholds}/>
                    </div>
                ) : 
                <div className="add-widget">
                    <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <FaPlus />
                    </button>
                    <p>Add New Widget</p>
                </div>
            }
        </>
    );
}

export default ShowWidget;