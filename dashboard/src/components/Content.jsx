import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DP from "../assets/Ellipse 8.png";
import { useSelector } from "react-redux";
import ChartComponent from "./ChartComponent";
import PieChartComponent from "./PieChartComponent";
import { Table, TableChart } from "./TableChart";

export const Content = () => {
  const [currQuarter, setCurrQuarter] = useState("Q1");

  // calling the data from the store
  const data = useSelector((state) => state.Reducer.Emissions);
  // console.log(data);
  const [quarterData, setQuarterData] = useState({
    emmissions: 0,
    revenue: 0,
    numOFSuppliers: 0,
  });

  // function to change the quarter
  useEffect(() => {
    let temp = {
      emmissions: 0,
      revenue: 0,
      numOFSuppliers: 0,
    };

    data.forEach((el) => {
      if (el.quarter === currQuarter) {
        temp.emmissions += el.Emissions;
        temp.revenue += el["Revenue (in INR)"];
        temp.numOFSuppliers += 1;
      }
    });

    setQuarterData(temp);
  }, [currQuarter]);

  const groupedBarData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Emission-2023",
        data: data.filter((el) => el.Year === 2023).map((el) => el.Emissions),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Emission-2022",
        data: data.filter((el) => el.Year === 2022).map((el) => el.Emissions),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  // console.log(groupedBarData.datasets[0].data);

  const lineChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "R/E-2023",
        data: data.filter((el) => el.Year === 2023).map((el) => el["R/E"]),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
        type: "line", // Set type to 'line' for the line chart
      },
      {
        label: "R/E-2022",
        data: data.filter((el) => el.Year === 2022).map((el) => el["R/E"]),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
        type: "line", // Set type to 'line' for the line chart
      },
    ],
  };
  // console.log(lineChartData.datasets[0].data);

  //piedata
  const pieData = useSelector((state) => state.Reducer.Suppliers);
  // console.log(pieData);

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(2, 171, 108, 0.04) 0%, rgba(2, 171, 108, 0.04) 100%), #FFF",
        height: "100%",
      }}
    >
      <NAV>
        <div className="inner-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
              fill="#02AB6C"
            />
            <path
              d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
              fill="#02AB6C"
            />
            <path
              d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
              fill="#02AB6C"
            />
            <path
              d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
              fill="#02AB6C"
            />
            <path
              d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z"
              fill="#02AB6C"
            />
          </svg>
          <h3>Category-1</h3>
        </div>
        <div className="inner-box">
          <img
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            src={DP}
            alt="user_DP"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 8L12 16L19 8H5Z"
              fill="#474444"
            />
          </svg>
          <div className="notification-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z"
                fill="black"
                fill-opacity="0.84"
              />
            </svg>
            <h4>1</h4>
          </div>
        </div>
      </NAV>
      <div
        style={{
          display: "flex",
          padding: "10px 12px",
          justifyContent: "right",
          gap: "10px",
          flexShrink: "0",
          //   border: "1px solid black",
          width: "95%",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid#02AB6C",
            display: "inline-flex",
            height: "32px",
            alignItems: "center",
            padding: "0px 10px",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ fontWeight: "400" }}>Show Timeline: </h4>
          <select
            id="filter"
            style={{
              border: "none",
              color: "#02AB6C",
              background: "transparent",
              fontWeight: "600",
            }}
            onChange={(e) => setCurrQuarter(e.target.value)}
          >
            <option value="Q1" selected>
              Quarter 1
            </option>
            <option value="Q2">Quarter 2</option>
            <option value="Q3">Quarter 3</option>
            <option value="Q4">Quarter 4</option>
          </select>
        </div>
      </div>
      <TimeLineData>
        <div className="data-box">
          <div>
            <span>Current Year Emissions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_34_38)">
                <path
                  d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_38">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <br />
            <span style={{ fontSize: "10px", fontWeight: "400" }}>
              contribution to Scope3
            </span>
          </div>
          <div>
            <div
              className="colorfulbox"
              style={{
                border: "1px solid #e03021",
                backgroundColor: "#f5e5e3",
                borderLeft: "6px solid #e03021",
              }}
            >
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                {quarterData.emmissions + " CO2e"}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#e03021",
                  marginRight: "10px",
                }}
              >
                7.6%YOY
              </p>
            </div>
          </div>
        </div>
        <div className="data-box">
          <div>
            <span>Revenue to emission ratio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_34_38)">
                <path
                  d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_38">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <br />
            <span style={{ fontSize: "10px", fontWeight: "400" }}>
              contribution to Scope3
            </span>
          </div>
          <div>
            <div
              className="colorfulbox"
              style={{
                border: "1px solid #FFC400",
                backgroundColor: "#f9f6e9",
                borderLeft: "6px solid #FFC400",
              }}
            >
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                {quarterData.revenue % 1000}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#FFC400",
                  marginRight: "10px",
                }}
              >
                3.7%YOY
              </p>
            </div>
          </div>
        </div>
        <div className="data-box">
          <div>
            <span>Category-1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_34_38)">
                <path
                  d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_38">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <br />
            <span style={{ fontSize: "10px", fontWeight: "400" }}>
              contribution to Scope3
            </span>
          </div>
          <div>
            <div
              className="colorfulbox"
              style={{
                border: "1px solid #02AB6C",
                backgroundColor: "#d5ece3",
                borderLeft: "6px solid #02AB6C",
              }}
            >
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                32% of Scope3
              </h2>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "200px",
            backgroundColor: "#02AB6C",
            color: "white",
            padding: "0px 0px 0px 20px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "19px", fontWeight: "600" }}>
            Total number of reached suppliers
          </h2>
          <h1
            style={{ fontSize: "30px", fontWeight: "600", textAlign: "center" }}
          >
            {quarterData.numOFSuppliers}
          </h1>
        </div>
        <div></div>
      </TimeLineData>
      <ChartComponent
        groupedBarData={groupedBarData}
        lineChartData={lineChartData}
      />
      <CompanyChart>
        <PieChartComponent pieData={pieData} />
        <TableChart />
      </CompanyChart>
    </div>
  );
};

const NAV = styled.div`
  display: flex;
  width: 76.7vw;
  height: 64px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  /* border: 1px solid red; */

  .inner-box {
    display: flex;
    height: 56px;
    padding: 8px 16px;
    align-items: center;
    gap: 10px;
  }

  .notification-icon {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    /* border: 1px solid red; */
    border-radius: 8px;
    border: 1px solid #ebebeb;
    background: #fff;
  }

  .notification-icon h4 {
    position: absolute;
    top: 0%;
    display: flex;
    width: 14px;
    height: 14px;
    padding: 2px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    font-size: 8px;
    right: 0%;
    left: 50%;
    border-radius: 100px;
    background: linear-gradient(0deg, #ea7e7e 0%, #ea7e7e 100%), #fff;
  }
`;

const TimeLineData = styled.div`
  display: flex;
  justify-content: space-around;

  .data-box {
    display: flex;
    width: 267px;
    height: 134px;
    flex-direction: column;
    align-items: start;
    flex-shrink: 0;
    /* border: 1px solid black; */
    border-radius: 10px;
    border-radius: 12px;
    padding: 10px;
    border: 1px solid #ebebeb;
    background: #fff;
    box-shadow: 0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01),
      0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01),
      0px 9px 80px 0px rgba(0, 0, 0, 0.02);
  }

  .data-box div {
    /* border: 1px solid red; */
    padding: 10px 0px 10px 20px;
    height: 50%;
    width: 90%;
    /* border: 1px solid #ebebeb; */
  }

  .colorfulbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e03021;
    background-color: #f5e5e3;
    border-left: 6px solid #e03021;
    border-radius: 8px;
    padding: 10px;
  }
`;

const CompanyChart = styled.div`
  display: flex;
  gap: 30px;
`;
