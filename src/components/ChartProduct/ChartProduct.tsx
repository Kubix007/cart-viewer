import * as Types from "./ChartProduct.types";
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
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartProduct = ({ products }: Types.IProps) => {
  const labels = [products.title];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: products.title,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Regular price",
        data: labels.map(() => products.total),
        backgroundColor: "red",
      },
      {
        label: "Discounted price",
        data: labels.map(() => products.discountedPrice),
        backgroundColor: "blue",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartProduct;
