import React from "react";
import { useState } from "react";

const Offcanvas = () => {

    return (
        <>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Add New Widget</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Bar Chart
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Line Chart
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Pie Chart
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Gauge
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Clock
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Battery
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            HTML Canvas
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Indicator
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Manual Input value
                        </button>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="nsbtn" type="button">
                            Image
                        </button>
                    </div>

                
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Widget</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input  type="text" placeholder="Barchart Label 1" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 1" />
                            <input  type="text" placeholder="Barchart Label 2" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 2" />
                            <input  type="text" placeholder="Barchart Label 3" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 3" />
                            <input  type="text" placeholder="Barchart Label 4" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 4" />
                            <input  type="text" placeholder="Barchart Label 5" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 5" />
                            <input  type="text" placeholder="Barchart Label 6" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 6" />
                            <input  type="text" placeholder="Barchart Label 7" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 7" />
                            <input  type="text" placeholder="Barchart Label 8" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 8" />
                            <input  type="text" placeholder="Barchart Label 9" className="m-2"/>
                            <input type="numeric" placeholder="Threshold 9" />
                            <input type="text" placeholder="Barchart Label 10"  className="m-2" />
                            <input  type="numeric" placeholder="Threshold 10" />
                            <br />Topic <br />
                            <input type="text" />
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="offcanvas">Create Widget</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Offcanvas;