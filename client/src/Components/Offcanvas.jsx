import React from "react";
import { useState } from "react";

const Offcanvas = (props) => {

    let [cord,setCord] = useState([{
        label:"",
        threshold:"",
    }]);
    let [topic,setTopic] = useState('');
    let [label1,setLabel1] = useState('');
    let [label2,setLabel2] = useState('');
    let [label3,setLabel3] = useState('');
    let [label4,setLabel4] = useState('');
    let [label5,setLabel5] = useState('');
    let [label6,setLabel6] = useState('');
    let [label7,setLabel7] = useState('');
    let [label8,setLabel8] = useState('');
    let [label9,setLabel9] = useState('');
    let [label10,setLabel10] = useState('');

    let [threshold1,setThreshold1] = useState('');
    let [threshold2,setThreshold2] = useState('');
    let [threshold3,setThreshold3] = useState('');
    let [threshold4,setThreshold4] = useState('');
    let [threshold5,setThreshold5] = useState('');
    let [threshold6,setThreshold6] = useState('');
    let [threshold7,setThreshold7] = useState('');
    let [threshold8,setThreshold8] = useState('');
    let [threshold9,setThreshold9] = useState('');
    let [threshold10,setThreshold10] = useState('');

    const addBarChart = (e) => {
        e.preventDefault();
        if((label1==''&&label2==''&&label3==''&&label4==''&&label5==''&&label6==''&&label7==''&&label8==''&&label9==''&&label10=='')||
            (threshold1==''&&threshold2==''&&threshold3==''&&threshold4==''&&threshold5==''&&threshold6==''&&threshold7==''&&threshold8==''&&threshold9==''&&threshold10==''))
        {
            alert('Please add atleast 1 Label and Threshold');
        }
        else if(topic=='')
        {
            alert('Please add Topic');
        }
        else
        {
            if(label1!=''&&threshold1!=''){
                setCord((preval)=>{
                    return [...preval,{label:label1,threshold:threshold1}]
                });
            }
            if(label2!=''&&threshold2!=''){
                setCord((preval)=>{
                    return [...preval,{label:label2,threshold:threshold2}]
                });
            }
            if(label3!=''&&threshold3!=''){
                setCord((preval)=>{
                    return [...preval,{label:label3,threshold:threshold3}]
                });
            }
            if(label4!=''&&threshold4!=''){
                setCord((preval)=>{
                    return [...preval,{label:label4,threshold:threshold4}]
                });
            }
            if(label5!=''&&threshold5!=''){
                setCord((preval)=>{
                    return [...preval,{label:label5,threshold:threshold5}]
                });
            }
            if(label6!=''&&threshold6!=''){
                setCord((preval)=>{
                    return [...preval,{label:label6,threshold:threshold6}]
                });
            }
            if(label7!=''&&threshold7!=''){
                setCord((preval)=>{
                    return [...preval,{label:label7,threshold:threshold7}]
                });
            }
            if(label8!=''&&threshold8!=''){
                setCord((preval)=>{
                    return [...preval,{label:label8,threshold:threshold8}]
                });
            }
            if(label9!=''&&threshold9!=''){
                setCord((preval)=>{
                    return [...preval,{label:label9,threshold:threshold9}]
                });
            }
            if(label10!=''&&threshold10!=''){
                setCord((preval)=>{
                    return [...preval,{label:label10,threshold:threshold10}]
                });
            }
            console.log(label1);
            // cord.map((val)=>{ console.log(val.label,val.threshold) });
            console.log(cord);
            console.log(topic);
            props.oSelect(cord,topic);
        }
    }   
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Add new widget</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="card mb-2">
                        <div className="card-body">
                            <button type="button" className="nsbtn text-reset" data-bs-toggle="modal" data-bs-dismiss="offcanvas" data-bs-target="#exampleModal" aria-label="Close">
                                Bar Chart
                            </button>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Bar Chart</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input value={label1} type="text" placeholder="Barchart Label 1" onChange={(e)=>setLabel1(e.target.value)} className="m-2"/>
                                    <input value={threshold1} type="numeric" onChange={(e)=>setThreshold1(e.target.value)} placeholder="Threshold 1" />
                                    <input value={label2} type="text" placeholder="Barchart Label 2" onChange={(e)=>setLabel2(e.target.value)} className="m-2"/>
                                    <input value={threshold2} type="numeric" onChange={(e)=>setThreshold2(e.target.value)} placeholder="Threshold 2" />
                                    <input value={label3} type="text" placeholder="Barchart Label 3" onChange={(e)=>setLabel3(e.target.value)} className="m-2"/>
                                    <input value={threshold3} type="numeric" onChange={(e)=>setThreshold3(e.target.value)} placeholder="Threshold 3" />
                                    <input value={label4} type="text" placeholder="Barchart Label 4" onChange={(e)=>setLabel4(e.target.value)} className="m-2"/>
                                    <input value={threshold4} type="numeric" onChange={(e)=>setThreshold4(e.target.value)} placeholder="Threshold 4" />
                                    <input value={label5} type="text" placeholder="Barchart Label 5" onChange={(e)=>setLabel5(e.target.value)} className="m-2"/>
                                    <input value={threshold5} type="numeric" onChange={(e)=>setThreshold5(e.target.value)} placeholder="Threshold 5" />
                                    <input value={label6} type="text" placeholder="Barchart Label 6" onChange={(e)=>setLabel6(e.target.value)} className="m-2"/>
                                    <input value={threshold6} type="numeric" onChange={(e)=>setThreshold6(e.target.value)} placeholder="Threshold 6" />
                                    <input value={label7} type="text" placeholder="Barchart Label 7" onChange={(e)=>setLabel7(e.target.value)} className="m-2"/>
                                    <input value={threshold7} type="numeric" onChange={(e)=>setThreshold7(e.target.value)} placeholder="Threshold 7" />
                                    <input value={label8} type="text" placeholder="Barchart Label 8" onChange={(e)=>setLabel8(e.target.value)} className="m-2"/>
                                    <input value={threshold8} type="numeric" onChange={(e)=>setThreshold8(e.target.value)} placeholder="Threshold 8" />
                                    <input value={label9} type="text" placeholder="Barchart Label 9" onChange={(e)=>setLabel9(e.target.value)} className="m-2"/>
                                    <input value={threshold9} type="numeric" onChange={(e)=>setThreshold9(e.target.value)} placeholder="Threshold 9" />
                                    <input value={label10} type="text" placeholder="Barchart Label 10" onChange={(e)=>setLabel10(e.target.value)} className="m-2" />
                                    <input value={threshold10} type="numeric" onChange={(e)=>setThreshold10(e.target.value)} placeholder="Threshold 10" />
                                    <br />Topic <br />
                                    <input value={topic} type="text" onChange={(e)=>setTopic(e.target.value)}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={addBarChart}>Add BarChart</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Battery
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Clock
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Devices Table
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Double Axis
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Gauge
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            HTML Canvas 
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Histogram 
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Image
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Indicator
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Line Chart 
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            Manual Input value
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offcanvas;