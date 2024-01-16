import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ groupedBarData, lineChartData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: groupedBarData.labels,
          datasets: groupedBarData.datasets,
        },
        options: {
          indexAxis: "x",
          scales: {
            x: {
              stacked: false,
            },
            y: {
              stacked: false,
              beginAtZero: false,
              position: "left", // Bar chart y-axis on the left side
              max: 9000,
              stepSize: 1000,
            },
            "line-y-axis": {
              position: "right", // Line chart y-axis on the right side
              beginAtZero: true,
              max: 180,
              stepSize: 20,
            },
          },
          responsive: true,
        },
      });

      // Adding line chart separately
      chartInstance.current.data.datasets.push({
        ...lineChartData.datasets[0], // First line chart dataset
        yAxisID: "line-y-axis", // Assigning separate y-axis for the line chart
        type: "line", // Set type to 'line' for the line chart
      });
      chartInstance.current.data.datasets.push({
        ...lineChartData.datasets[1], // First line chart dataset
        yAxisID: "line-y-axis", // Assigning separate y-axis for the line chart
        type: "line", // Set type to 'line' for the line chart
      });

      chartInstance.current.update(); // Update the chart
    }

    // Cleanup function
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [groupedBarData, lineChartData]);

  return (
    <div
      style={{
        width: "946px",
        // height: "447px",
        flexShrink: "0",
        margin: "10px",
        borderRadius: "12px",
        border: "1px solid #EBEBEB",
        background: "#FFF",
        boxShadow:
          "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)",
        border: "1px solid #d8d8d8",
      }}
    >
      <h3 style={{ padding: "20px 30px 0px 30px" }}>Emission/Revenue</h3>
      <canvas
        style={{
          padding: "0px 30px 30px 30px",
          width: "946px",
          // height: "447px",
          flexShrink: "0",
        }}
        ref={chartRef}
      />
    </div>
  );
};

export default ChartComponent;
