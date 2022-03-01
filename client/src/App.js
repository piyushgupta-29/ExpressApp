import './App.css';
import React,{ useState } from 'react';
import { FaBell } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import BarChart from './Components/BarChart';
import AddWidget from './Components/AddWidget';
import GetDate from "./Components/GetDate";

function App() {
    let [showWidget,setShowWidget] = useState(true);
    let [showBar,setShowBar] = useState(false);
    let [topic,setTopic] = useState('');
    let [cord,setCord] = useState([{}]);
    let addChart = (c,t) => {
        setShowBar(true);
        setShowWidget(false);
        setTopic(t);
        setCord(c);
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><h2>Ubidots</h2></a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Devices
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Devices</a></li>
                                    <li><a class="dropdown-item" href="#">Groups</a></li>
                                    <li><a class="dropdown-item" href="#">Types</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Functions</a></li>
                                    <li><a class="dropdown-item" href="#">Plugins</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Data
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Dashboards</a></li>
                                    <li><a class="dropdown-item" href="#">Events</a></li>
                                </ul>
                            </li>         
                        </ul>
                        <div class="d-flex">
                            <div className="faicon">
                                <FaQuestionCircle />
                            </div>
                            <div className='faicon'>
                                <FaBell />
                            </div>
                            <div className='faicon'>
                                <BsFillPersonFill />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="second-nav">
                <FaList className='falist'/>
                <p>First Dashboard</p>
                <GetDate className="date"/>
            </div>
            { showWidget ? <AddWidget onSelect={addChart}/> : null }
            { showBar ? <BarChart title={topic} cd={cord}/> : null }
        </>
    );
}

export default App;
