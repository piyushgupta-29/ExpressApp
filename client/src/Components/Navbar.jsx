import React from 'react';
import { FaBell,FaQuestionCircle } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <img src="images/logo.png" alt="" style={{ width: "150px", marginRight: "500px"}}/>
                    {/* <a className="navbar-brand" href="#"><h2>Altruism Labs</h2></a> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Devices
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/devices">Devices</a></li>
                                    <li><a className="dropdown-item" href="#">Groups</a></li>
                                    <li><a className="dropdown-item" href="#">Types</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Functions</a></li>
                                    <li><a className="dropdown-item" href="#">Plugins</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Data
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Dashboards</a></li>
                                    <li><a className="dropdown-item" href="#">Events</a></li>
                                </ul>
                            </li>         
                        </ul>
                        <div className="d-flex">
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
    </>
  )
}

export default Navbar;