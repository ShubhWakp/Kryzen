// import React, { useEffect, useRef, useState } from "react";
// import Chart from "chart.js/auto";
// import ItalianBasil from "../vegetables/ItalianBasil";

// const Charts = () => {
//   const [chartUsed, setChartUsed] = useState(false);
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     const labels = ItalianBasil.map((data) => data.date); // dates
//     const retailPrices = ItalianBasil.map((data) => data.retailPrice); // retail prices
//     const wholesaleMinPrices = ItalianBasil.map(
//       (data) => data.wholesalePrice.min
//     );
//     const wholesaleMaxPrices = ItalianBasil.map(
//       (data) => data.wholesalePrice.max
//     );
//     const data = {
//       labels: labels,
//       datasets: [
//         {
//           label: "Retail Price",
//           data: retailPrices,
//           borderColor: "rgba(255, 99, 132, 1)",
//           backgroundColor: "rgba(255, 99, 132, 0.2)",
//           fill: false,
//         },
//         {
//           label: "Wholesale Price (Min)",
//           data: wholesaleMinPrices,
//           borderColor: "rgba(54, 162, 235, 1)",
//           backgroundColor: "rgba(54, 162, 235, 0.2)",
//           fill: false,
//         },
//         {
//           label: "Wholesale Price (Max)",
//           data: wholesaleMaxPrices,
//           borderColor: "rgba(255, 206, 86, 1)",
//           backgroundColor: "rgba(255, 206, 86, 0.2)",
//           fill: false,
//         },
//       ],
//     };

//     const config = {
//       type: "line",
//       data: data,
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     };

//     if (chartInstance.current !== null) {
//       chartInstance.current.destroy();
//     }

//     const ctx = chartRef.current.getContext("2d");
//     chartInstance.current = new Chart(ctx, config);
//     setChartUsed(true);

//     return () => {
//       if (chartInstance.current !== null) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       <div
//         className="card"
//         style={{ width: "500px", float: "right", marginRight: "20px" }}
//       >
//         <div className="card-body">
//           <canvas ref={chartRef}></canvas>
//         </div>
//       </div>
//       <div style={{ padding: "20px", textAlign: "center" }}>
//         {" "}
//         {/* Added padding and text alignment */}
//         <h2>Price Trend</h2>
//         <div style={{ overflowX: "auto" }}>
//           {" "}
//           {/* Add overflowX to handle horizontal scrolling */}
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Retail Price</th>
//                 <th>Wholesale Price (Min)</th>
//                 <th>Wholesale Price (Max)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ItalianBasil.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.date}</td>
//                   <td>{data.retailPrice}</td>
//                   <td>{data.wholesalePrice.min}</td>
//                   <td>{data.wholesalePrice.max}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ItalianBasil from "../vegetables/ItalianBasil";

const Charts = () => {
  const [chartUsed, setChartUsed] = useState(false);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const labels = ItalianBasil.map((data) => data.date); // dates
    const retailPrices = ItalianBasil.map((data) => data.retailPrice); // retail prices
    const wholesaleMinPrices = ItalianBasil.map(
      (data) => data.wholesalePrice.min
    );
    const wholesaleMaxPrices = ItalianBasil.map(
      (data) => data.wholesalePrice.max
    );
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Retail Price",
          data: retailPrices,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: false,
        },
        {
          label: "Wholesale Price (Min)",
          data: wholesaleMinPrices,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: false,
        },
        {
          label: "Wholesale Price (Max)",
          data: wholesaleMaxPrices,
          borderColor: "rgba(255, 206, 86, 1)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          fill: false,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, config);
    setChartUsed(true);

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div
        className="card"
        style={{ width: "500px", float: "right", marginRight: "20px" }}
      >
        <div className="card-body">
          <canvas ref={chartRef}></canvas>
        </div>

        {/* Information Card */}
        <div className="card" style={{ margin: "20px 0" }}>
          <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px", textAlign: "center" }}>
        {" "}
        {/* Added padding and text alignment */}
        <h2>Price Trend</h2>
        <div style={{ overflowX: "auto" }}>
          {" "}
          {/* Add overflowX to handle horizontal scrolling */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Retail Price</th>
                <th>Wholesale Price (Min)</th>
                <th>Wholesale Price (Max)</th>
              </tr>
            </thead>
            <tbody>
              {ItalianBasil.map((data, index) => (
                <tr key={index}>
                  <td>{data.date}</td>
                  <td>{data.retailPrice}</td>
                  <td>{data.wholesalePrice.min}</td>
                  <td>{data.wholesalePrice.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Charts;
