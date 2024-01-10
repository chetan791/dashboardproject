import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ pieData }) => {
  const data = {
    labels: pieData.map((item) => item.Supplier),
    datasets: [
      {
        data: pieData.map((item) => item.TotalEmissions),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        borderRadius: "12px",
        border: "1px solid #EBEBEB",
        background: "#FFF",
        padding: "0px 30px 80px 30px",
        margin: "10px",
        marginBottom: "30px",
        border: "1px solid #d8d8d8",
      }}
    >
      <h3>Emission by Supplier</h3>
      <Doughnut
        style={{}}
        data={data}
        options={{
          maintainAspectRatio: false, // Set to false to allow the chart to adjust to its container
          cutoutPercentage: 70,
          responsive: true,
        }}
      />
    </div>
  );
};

export default PieChart;
