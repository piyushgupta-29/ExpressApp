import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Charts = (props) => {

    return (
        <>
            <div style={{ width: 400 }} >
        
            { props.type === "Pie" ? <Pie style={{marginTop: "5rem"}}
                data={ {
                    labels: props.labels.map((val) => val ),
                    datasets: [{
                        label: props.topic,
                        data: props.thresholds.map(val => val ),
                        backgroundColor: ['red','blue','green','yellow','pink']
                    }
                ]
                }}
                />
                : props.type === "Line" ? <Line style={{marginTop: "3rem"}}
                data={ {
                    labels: props.labels.map((val) => val ),
                    datasets: [{
                        label: props.topic,
                        data: props.thresholds.map(val => val ),
                        backgroundColor: 'blue'
                    }
                ]
                }} /> :
                <Bar
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
            }
            </div>
        </>
    );
}

export default Charts;