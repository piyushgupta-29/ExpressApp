import React, { useEffect } from "react";
import Offcanvas from './Offcanvas';
import Charts from "./Charts";
import { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

const ShowWidget = () => {
    let [type,setType] = useState('');

    let [charts,setCharts] = useState();
    useEffect( async () => {
        let res = await axios.get('/api/getCharts');
        setCharts(res.data);
    },[]);
    // console.log(charts);
    return (
        <>
            
            <div className="container mt-2 d-flex justify-content-end">
                <Offcanvas />
            </div>
            {
                charts !==undefined && charts.length > 0 ? charts.map((val) =>
                    <div className="container d-flex" key={val._id}>
                        <Charts topic={val.topic} labels={val.labels} thresholds={val.thresholds} type={val.type} />
                    </div>
                ) : 
                <div className="add-widget mx-5">
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