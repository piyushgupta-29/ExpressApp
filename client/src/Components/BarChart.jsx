import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = (props) => {
    return (
        <>
            <div style={{ width: 500 }}>
                <Bar 
                data={ {
                    labels: props.cd.map((val)=>val.label),
                    datasets: [{
                        label: props.title,
                        data: props.cd.map((val)=>val.threshold),
                        backgroundColor: 'blue',
                    }]
                }}
                />
            </div>
        </>
    );
}

export default BarChart