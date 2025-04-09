import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartComponent = ({ type = "line" }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const chart = new Chart(ctx, {
        type: type,
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Sales",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor:
                type === "bar"
                  ? "rgba(59, 130, 246, 0.5)"
                  : "rgba(59, 130, 246, 0.2)",
              borderColor: "rgba(59, 130, 246, 1)",
              borderWidth: 1,
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => chart.destroy();
    }
  }, [type]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
