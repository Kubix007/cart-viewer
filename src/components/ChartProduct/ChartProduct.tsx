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
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
  const productsData = useSelector((state: RootState) => state.products);

  const getProductDetails = (productId: number) => {
    return productsData.data.products.find((item) => item.id === productId);
  };

  const labels = products.map((item) => item.title.split(" "));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Regular price",
        data: products.map((item) => getProductDetails(item.id)?.price),
        backgroundColor: "#fb8500",
        borderColor: "#fb8500",
      },
      {
        label: "Discounted price",
        data: products.map((item) =>
          Number(
            (
              getProductDetails(item.id)?.price! *
              ((100 - getProductDetails(item.id)?.discountPercentage!) / 100)
            ).toFixed(2)
          )
        ),
        backgroundColor: "#d62828",
        borderColor: "#d62828",
      },
    ],
  };

  return (
    <Styles.Container>
      <Line options={options} data={data} width={500} height={500} />
    </Styles.Container>
  );
};

export default ChartProduct;
