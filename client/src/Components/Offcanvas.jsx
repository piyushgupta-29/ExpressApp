import React from "react";
import { FaPlus,FaRegChartBar,FaMapMarkerAlt } from "react-icons/fa";
import { MdBattery80 } from 'react-icons/md'
import { FcClock } from 'react-icons/fc'
import { BiTable } from 'react-icons/bi'
import { ImSwitch } from 'react-icons/im'
import { BsThermometerHalf,BsImage } from 'react-icons/bs'
import { AiFillPieChart,AiOutlineLineChart } from 'react-icons/ai'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChart } from "../action";
import axios from "axios";

const Offcanvas = (props) => {

    let [topic,setTopic] = useState('');
    // let [labels,setLabels] = useState([]);
    // let [thresholds,setThresholds] = useState([]);
    let [type,setType] = useState('');

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

    let dispatch = useDispatch();
    let clickHandler = async () => {
        if(!topic)
        {
            alert('Please add Topic');
        }
        let sum=0;
        let labels = [],thresholds=[];
        if(label1&&threshold1)
        {
            labels.push(label1);
            thresholds.push(threshold1);
            sum++;
        }
        if(label2&&threshold2)
        {
            labels.push(label2);
            thresholds.push(threshold2);
            sum++;
        }
        if(label3&&threshold3)
        {
            labels.push(label3);
            thresholds.push(threshold3);
            sum++;
        }
        if(label4&&threshold4)
        {
            labels.push(label4);
            thresholds.push(threshold4);
            sum++;
        }
        if(label5&&threshold5)
        {
            labels.push(label5);
            thresholds.push(threshold5);
            sum++;
        }
        if(label6&&threshold6)
        {
            labels.push(label6);
            thresholds.push(threshold6);
            sum++;
        }
        if(label7&&threshold7)
        {
            labels.push(label7);
            thresholds.push(threshold7);
            sum++;
        }
        if(label8&&threshold8)
        {
            labels.push(label8);
            thresholds.push(threshold8);
            sum++;
        }
        if(label9&&threshold9)
        {
            labels.push(label9);
            thresholds.push(threshold9);
            sum++;
        }
        if(label10&&threshold10)
        {
            labels.push(label10);
            thresholds.push(threshold10);
            sum++;
        }
        if(sum==0)
        {
            alert('Please add atleast one label and threshold');
        }
        else 
        {
            console.log(labels);
            let res = await axios.post('/api/addChart',{ topic, labels, thresholds, type});
            console.log(res);
        }
    }
    return (
        <>
            <button className="btn btn-primary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <FaPlus />
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Add New Widget</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-wrap">
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <FaRegChartBar style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Bar Chart
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <AiOutlineLineChart style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Line Chart
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <AiFillPieChart style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Pie Chart
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <FcClock style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Clock
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <BiTable style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Table
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <MdBattery80 style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Battery
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <FaMapMarkerAlt style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Map
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <BsImage style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Image
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center p-2 m-2" style={{"border": "1px solid rgb(0,0,0,0.5)","borderRadius": "5%","width": "6.5rem"}}>
                        <ImSwitch style={{"width": "5rem","height": "5rem","color": "rgb(54, 179, 236)"}}/>
                        
                        <button type="button" className="nsbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setType('Bar') }} >
                            Switch
                        </button>
                    </div>

                    
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Widget</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input  type="text" placeholder="Label 1" className="m-2" value={label1} onChange={e => { setLabel1(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 1" value={threshold1} onChange={e => { setThreshold1(e.target.value) }} />
                            <input  type="text" placeholder="Label 2" className="m-2" value={label2} onChange={e => { setLabel2(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 2" value={threshold2} onChange={e => { setThreshold2(e.target.value) }} />
                            <input  type="text" placeholder="Label 3" className="m-2" value={label3} onChange={e => { setLabel3(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 3" value={threshold3} onChange={e => { setThreshold3(e.target.value) }} />
                            <input  type="text" placeholder="Label 4" className="m-2" value={label4} onChange={e => { setLabel4(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 4" value={threshold4} onChange={e => { setThreshold4(e.target.value) }} />
                            <input  type="text" placeholder="Label 5" className="m-2" value={label5} onChange={e => { setLabel5(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 5" value={threshold5} onChange={e => { setThreshold5(e.target.value) }} />
                            <input  type="text" placeholder="Label 6" className="m-2" value={label6} onChange={e => { setLabel6(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 6" value={threshold6} onChange={e => { setThreshold6(e.target.value) }} />
                            <input  type="text" placeholder="Label 7" className="m-2" value={label7} onChange={e => { setLabel7(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 7" value={threshold7} onChange={e => { setThreshold7(e.target.value) }} />
                            <input  type="text" placeholder="Label 8" className="m-2" value={label8} onChange={e => { setLabel8(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 8" value={threshold8} onChange={e => { setThreshold8(e.target.value) }} />
                            <input  type="text" placeholder="Label 9" className="m-2" value={label9} onChange={e => { setLabel9(e.target.value) }}/>
                            <input type="numeric" placeholder="Threshold 9" value={threshold9} onChange={e => { setThreshold9(e.target.value) }} />
                            <input type="text" placeholder="Label 10"  className="m-2" value={label10} onChange={e => { setLabel10(e.target.value) }} />
                            <input  type="numeric" placeholder="Threshold 10" value={threshold10} onChange={e => { setThreshold10(e.target.value) }} />
                            <br />Topic <br />
                            <input type="text" value={topic} onChange={e => { setTopic(e.target.value) }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="offcanvas" onClick={clickHandler}>
                                Create Widget
                            </button>
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