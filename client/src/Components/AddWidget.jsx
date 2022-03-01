import React from "react";
import Offcanvas from './Offcanvas';
import { FaPlus } from "react-icons/fa";

const AddWidget = (props) => {
    
    let addChart = (cord,topic) => {
        props.onSelect(cord,topic);
    }
    return (
        <>
            <div className="add-widget">
            <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FaPlus /></button>
                <p>Add New Widget</p>
            </div>
            <Offcanvas oSelect={addChart}/>
        </>
    );
}

export default AddWidget;