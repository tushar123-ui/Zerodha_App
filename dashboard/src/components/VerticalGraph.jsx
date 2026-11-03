
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  // Parent container ki height follow karega
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
    },

    title: {
      display: true,
      text: "Holdings",
    },
  },

  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 45,
        minRotation: 0,
        font: {
          size: 11,
        },
      },
    },

    y: {
      beginAtZero: true,
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
