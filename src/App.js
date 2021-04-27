import React from "react";

import { useFetch } from "../hooks/useFetch";
import 'regenerator-runtime/runtime'; //needed NO IDEA WHY BUT FUCK IT LMFAOOOO
import * as d3 from "d3";

const viewHeight = 500;
const viewWidth = 500;
const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/NatnaelE/dataViz/master/a1_data.csv"
      );
     //console.log("data", loading, data);
      const size = 500;
      const margin = 20;
      const axisTextAlignmentFactor = 3;

    return (
    <div>
        <h1>Assignment 2: Exploratory Data Analysis</h1>
        <h3>Data Background:
            <p>place holder text</p>
        </h3>
        <h4>EDA</h4>
        <h3>
            Initial Questions:
            <li>What has been the most common crime so far in the last year?</li>
            <li>What type of location do most crimes occur in?</li>
            <li>Which areas have the most Homicides/Murders?</li>
        </h3>
        <h3>Visual Analysis</h3>
        <h6>Viz 1</h6>
        <svg width={size} height={size} style={{ border: "1px solid black" }}>
            
        </svg>
        <h6>Viz 2</h6>
        <h6>Viz 3</h6>
        <h6>Viz 4</h6>
        <h6>Viz 5</h6>
        <h6>Viz 6</h6>
        <h6>Viz 7</h6>
        <h6>Viz 8</h6>
        <h3>Closing Statements</h3>
    </div>
    );
}

export default App; 
