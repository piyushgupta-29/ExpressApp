import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector } from "react-redux";

const Charts = (props) => {

    let totalCharts = useSelector(state => state.showCharts );

    return (
        <>
            <div style={{ width: 700 }} className="d-flex">
                
            {/* { props.type === "Pie" ? <Pie
                data={ {
                    labels: totalLabel.map((val) => val ),
                    datasets: [{
                        label: props.topic,
                        data: totalThreshold.map(val => val ),
                        backgroundColor: 'blue'
                    }
                ]
                }}
                />
                : props.type === "Line" ? <Line
                data={ {
                    labels: totalLabel.map((val) => val ),
                    datasets: [{
                        label: props.topic,
                        data: totalThreshold.map(val => val ),
                        backgroundColor: 'blue'
                    }
                ]
                }} /> : */}
                <Line
                data={ {
                    labels: props.labels.map((val) => val ),
                    datasets: [{
                        label: props.topic,
                        data: props.thresholds.map(val => val ),
                        backgroundColor: 'blue'
                    }
                ]
                }}
                />
            {/* } */}
            </div>
        </>
    );
}

export default Charts;