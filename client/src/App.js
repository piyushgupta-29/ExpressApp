import './App.css';
import React,{ useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { Route, Routes } from 'react-router-dom'
import BarChart from './Components/BarChart';
import AddWidget from './Components/AddWidget';
import GetDate from "./Components/GetDate";
import Navbar from './Components/Navbar';
import DevicePage from './Components/DevicePage';
import { useSelector } from 'react-redux';

function App() {
    // let [showWidget,setShowWidget] = useState(true);
    // let [showBar,setShowBar] = useState(false);
    // let [topic,setTopic] = useState('');
    // let [cord,setCord] = useState([{}]);
    return (
        <>
            <Navbar />
            <div className="second-nav">
                <FaAlignJustify className='falist'/>
                <p>First Dashboard</p>
                <GetDate className="date"/>
            </div>
            {/* { showWidget ? <AddWidget onSelect={addChart}/> : null }
            { showBar ? <BarChart title={topic} cd={cord}/> : null } */}
            <Routes>
                <Route exact path='/' element={<AddWidget />}></Route>
                <Route exact path='/devices' element={<DevicePage />}></Route>
            </Routes>
        </>
    );
}

export default App;
