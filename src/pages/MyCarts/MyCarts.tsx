import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CartCardList from "../../components/CartCardList";
import Spinner from "../../components/Spinner";
import * as Styles from "./MyCarts.styles";

const MyCarts = () => {
  const { isLoading } = useSelector((state: RootState) => state.carts);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Styles.Container>
      <CartCardList />
    </Styles.Container>
  );
};

export default MyCarts;
