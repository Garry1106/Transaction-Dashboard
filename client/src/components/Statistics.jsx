import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/statistics.css"

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    fetchStatistics();
  }, [month]);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get("http://localhost:5000/statistics", {
        params: { month },
      });
      setStatistics(response.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("default", { month: "long" });
  };

  return (
    <div className="statistics table">
      <h2 className="table-title">Statistics for: {getMonthName(month)}</h2>
      <div className="table-content">
        <table>
          <tbody>
            <tr>
              <td>
                Total Sales:
              </td>
              <td className="data">{statistics.totalSaleAmount}</td>
            </tr>
            <tr>
              <td>
                Total Sold Items:
              </td>
              <td className="data">{statistics.totalSoldItems}</td>
            </tr>
            <tr>
              <td>
                Total Not Sold Items:
              </td>
              <td className="data">{statistics.totalNotSoldItems}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;

// <div className="statistics table">
//       <h2 className="table-title">Statistics for: {getMonthName(month)}</h2>
//       <div className="table-content">
//         <p>
//           <b>Total Sales:</b>
//           <p className="data">{statistics.totalSaleAmount}</p>
//         </p>
//         <p>
//           <b>Total Sold Items:</b>
//           <p className="data"> {statistics.totalSoldItems}</p>
//         </p>
//         <p>
//           <b>Total Not Sold Items</b>:
//           <p className="data">{statistics.totalNotSoldItems}</p>
//         </p>
//       </div>
//     </div>
