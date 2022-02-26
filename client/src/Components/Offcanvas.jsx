import React from "react";

const Offcanvas = () => {
    return (
        <>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Add new widget</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="card mb-2">
                        <div class="card-body">
                            Bar Chart
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Battery
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Clock
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Devices Table
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Double Axis
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Gauge
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            HTML Canvas 
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Histogram 
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Image
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Indicator
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Line Chart 
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Manual Input
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offcanvas;