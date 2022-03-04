import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = (props) => {
    return (
        <>

            <div style={{ width: 700 }} className="d-flex">
                
                <Line 
                data={ {
                    // labels: props.cd.map((val)=>val.label),
                    labels: ['tennis','badminton','cricket','judo'],
                    datasets: [{
                        // label: props.title,
                        // data: props.cd.map((val)=>val.threshold),
                        label: '# of players',
                        data: [20,40,100,10],
                        backgroundColor: 'blue'
                    },
                    {
                        label: 'per month expense',
                        data: [150,70,30,20],
                        backgroundColor: 'yellow'
                    }
                ]
                }}
                />

            </div>
        </>
    );
}

export default BarChart;
