import React from 'react';
import { BsFillCalendarFill } from "react-icons/bs";

const GetDate = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if(minutes<10)  
        minutes = `0${minutes}`;
    if(hours<10)
        hours = `0${hours}`;
    const dat = `${days[d.getDay()]} ${d.getDate()} ${d.getFullYear()} ${hours}:${minutes}`;
    return (
        <div className='d-flex'>
            <BsFillCalendarFill className='calendar'/>
            <p style={{ fontSize: "1rem" , marginTop: ".5rem"}}>{dat}</p>
        </div>
    );
}

export default GetDate;
