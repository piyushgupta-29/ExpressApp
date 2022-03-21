import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ShowWidget from './Components/ShowWidget';
import GetDate from "./Components/GetDate";
import Navbar from './Components/Navbar';
import DevicePage from './Components/DevicePage';
import VariablePage from './Components/VariablePage';
import { FaAlignJustify } from 'react-icons/fa'

function App() {
    return (
        <>
            <Navbar />
            {
                window.location.href == 'http://localhost:3000/' ? 
                <div className="d-flex justify-content-between second-nav ">
                    <div className='d-flex'>
                        <FaAlignJustify className='falist'/>
                        <p>First Dashboard</p>
                    </div>
                    <GetDate className="date"/>
                </div>:
                <div className="d-flex justify-content-between second-nav">
                    <p>Devices</p>
                    <GetDate className="date"/>
                </div>
            }
            <Routes>
                <Route exact path='/' element={<ShowWidget />} />
                <Route exact path='/devices' element={<DevicePage />} />
                <Route path='/variables/:name/:id' element={<VariablePage />} />
            </Routes>

        </>
    );
}

export default App;
