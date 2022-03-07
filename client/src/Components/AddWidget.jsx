import React from "react";
import Offcanvas from './Offcanvas';
import { FaPlus } from "react-icons/fa";

const AddWidget = (props) => {
    
    return (
        <>
            <div className="add-widget">
            <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FaPlus /></button>
                <p>Add New Widget</p>
            </div>
            <Offcanvas />
        </>
    );
}

export default AddWidget;