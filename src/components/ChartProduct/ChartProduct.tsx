import * as Types from "./ChartProduct.types";
import * as Styles from "./ChartProduct.styles";
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
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
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
    datasets: [
      {
        label: "Regular price",
        data: labels.map(() => products.total),
        backgroundColor: "#fb8500",
        barThickness: 30,
      },
      {
        label: "Discounted price",
        data: labels.map(() => products.discountedPrice),
        backgroundColor: "#d62828",
        barThickness: 30,
      },
    ],
    labels: [""],
  };

  return (
    <Styles.Container>
      <Bar options={options} data={data} />
    </Styles.Container>
  );
};

export default ChartProduct;
