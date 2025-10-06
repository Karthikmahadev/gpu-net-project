import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartCard = () => {
  const data = {
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
  };

  const options = {
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
  };

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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;
