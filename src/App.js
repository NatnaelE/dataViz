import React from "react";
const viewHeight = 500;
const viewWidth = 500;
const App = () => {
    return (
    <svg style={{ border: "1px solid black", width: viewWidth, height: viewHeight}}>
        <circle cx={200} cy={20} r="5"></circle>
        <rect x ={20} y = {50} width = "10" height="10" fill="rgb(230,230,230)"></rect>
        <rect x ={40} y = {50} width = "10" height="10" fill="rgb(230,230,230)"></rect>
        <rect x ={60} y = {50} width = "10" height="10" fill="rgb(230,230,230)"></rect>
        <rect x ={80} y = {50} width = "10" height="10" fill="rgb(230,230,230)"></rect>
        <rect x ={100} y = {50} width = "10" height="10"></rect>
        <line x1="0" y1={viewHeight} x2={150} y2={200} stroke="black"></line>
        <line x1="20" y1={viewHeight - 20} x2={150} y2={200} stroke="black"></line>
        <line x1="0" y1={viewHeight - 50} x2={150} y2={200} stroke="black"></line>
        <text x="20" y="35" class="small">
            "FUCK FUCK FUCK FUCK FUCK FUCK "
        </text>
    </svg>
    );
}

export default App; 