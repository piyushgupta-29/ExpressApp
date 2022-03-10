import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ShowWidget from './Components/ShowWidget';
import GetDate from "./Components/GetDate";
import Navbar from './Components/Navbar';
import DevicePage from './Components/DevicePage';
import VariablePage from './Components/VariablePage'

function App() {
    return (
        <>
            <Navbar />
            <div className="second-nav">
                {/* <FaAlignJustify className='falist'/> */}
                <p>Devices</p>
                <GetDate className="date"/>
            </div>
            <Routes>
                <Route exact path='/' element={<ShowWidget />} />
                <Route exact path='/devices' element={<DevicePage />} />
                <Route path='/variables/:name' element={<VariablePage />} />
            </Routes>
        </>
    );
}

export default App;
