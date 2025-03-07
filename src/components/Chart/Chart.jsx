import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";

// ✅ Import required Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// ✅ Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  // ✅ Fetch global daily data only when no country is selected
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const fetchedData = await fetchDailyData();
        setDailyData(fetchedData);
      } catch (error) {
        console.error("Error fetching daily data:", error);
      }
    };

    if (!country) {
      fetchAPI();
    }
  }, [country]); // Fetch only when country changes

  // ✅ Prevent crashes when `data` is null/undefined
  if (!data || !data.active) {
    return <p>Loading...</p>;
  }

  const { active, recovered, deaths } = data;

  // ✅ Line Chart for Global Data
  const lineChart =
    dailyData.length > 0 ? (
      <div style={{ height: "500px", width: "100%" }}>
        <Line
          data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [
              {
                data: dailyData.map((data) => data.confirmed),
                label: "Confirmed Cases",
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.3)",
                fill: true,
                tension: 0.3,
              },
              {
                data: dailyData.map((data) => data.recovered),
                label: "Recovered",
                borderColor: "green",
                backgroundColor: "rgba(0, 255, 0, 0.3)",
                fill: true,
                tension: 0.3,
              },
              {
                data: dailyData.map((data) => data.deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                fill: true,
                tension: 0.3,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false, // ✅ Prevents shrinking issue
            plugins: {
              title: {
                display: true,
                text: "Global COVID-19 Cases",
                font: { size: 18 },
              },
              legend: {
                position: "top",
              },
            },
            elements: {
              point: {
                radius: 4,
              },
            },
          }}
        />
      </div>
    ) : (
      <p>Loading...</p>
    );

  // ✅ Bar Chart for Country-Specific Data
  const barChart = country ? (
    <div style={{ height: "500px", width: "100%" }}>
      <Bar
        data={{
          labels: ["Active", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: ["rgba(0,0,255,0.5)", "rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
              data: [active, recovered, deaths],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false, // ✅ Fix shrinking issue
          plugins: {
            title: {
              display: true,
              text: `Current COVID-19 State in ${country}`,
              font: { size: 18 },
              
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  ) : null;

  return <div className={styles.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
