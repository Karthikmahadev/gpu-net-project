import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const ChartCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["", "", "", "", "", ""],
        datasets: [
          {
            label: "Price",
            data: [0.05, 0.06, 0.2, 0.27, 0.31, 0.43],
            borderColor: "orange",
            backgroundColor: "orange",
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBackgroundColor: "orange",
            pointBorderColor: "#ffae42",
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: "#333",
            titleColor: "#fff",
            bodyColor: "#fff",
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: false },
          },
          y: {
            grid: { display: false },
            ticks: { display: false },
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <div
      className="bg-gradient-to-br from-black via-black to-[#733006] text-white !p-5 rounded-[10px]"
    >
      <div className="mb-4">
        <span className="text-[15px] text-lime-500">● LIVE</span>
        <span className="text-sm text-white ml-[10px]">$GPU Price</span>
        <div className="text-white font-bold mt-[5px] text-[2rem]">$0.43</div>
      </div>
      <div className="h-[180px]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default ChartCard;
