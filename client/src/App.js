import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ShowWidget from './Components/ShowWidget';
import GetDate from "./Components/GetDate";
import Navbar from './Components/Navbar';
import DevicePage from './Components/DevicePage';
import VariablePage from './Components/VariablePage';
import { FaAlignJustify } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'

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
                    <div className='d-flex'>
                        {/* {console.log(window.location.href)} */}
                        {
                            window.location.href ==='http://localhost:3000/devices' ? null :
                            <span className='mt-1'> <BiArrowBack style={{ "fontSize": "1.5rem" }} /> </span>
                        }
                        <p>Devices</p>
                    </div>
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
