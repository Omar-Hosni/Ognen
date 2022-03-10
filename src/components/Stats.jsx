import React,{useState,useLayoutEffect} from "react";
import { Bar, Pie  } from "react-chartjs-2";
import  Chart  from "chart.js/auto";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const Stats = () => {

  const baseUrl = 'http://127.0.0.1:8000/history/';

  const [data, setData] = useState(0);
  const [PatternsLength, setPatternsLength] = useState(0);

  useLayoutEffect(()=>{
    fetch(baseUrl)
    .then((response)=>response.json())
    .then((data)=>{
      setData(data);

      data.map((data)=>{
        setPatternsLength(data.patterns.length);
      })

    })
  },[baseUrl])
  

  async function fetchData() {
    const response = await fetch(baseUrl); //await means wait until the request has been completed
    const datapoints = await response.json();
    return datapoints;
  }

  fetchData().then(datapoints=>{
    const tagsUsed = datapoints.map(
      function(index){
        return index.tag;
      });

      const patternsUsed = datapoints.map(
        function(index){
          return index.patterns;
        }
      )
  })	

  var sizeOfData = data.length;
  console.log(data.length)
  
  

  const barChartData = { 
    labels: ["tags used"],
    datasets: [
      {
        data: [sizeOfData],
        label: "Data stored in JSON",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true
      },
      {
        data: [PatternsLength],
        label: "Patterns available to train",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      }
    ]
  };

  return (
<div className="flex flex-col justify-center items-center mt-2 mb-2">
      <button 
      onClick={fetchData}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-3"
      >
        Fetch Data
        </button>
        <small className="font-bold">Models Visualization</small>
        <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "",
          fontSize: 15
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={barChartData}
    />
</div>
  );
  }
export default Stats;