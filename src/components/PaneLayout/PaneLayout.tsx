import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import NewProduct from "../NewProduct";
import * as Styles from "./PaneLayout.styles";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../features/newCart/newCartSlice";

const PaneLayout = () => {
  const newCartState = useSelector((state: RootState) => state.newCart);
  const dispatch: AppDispatch = useDispatch();

  const handleClick = (type: string) => {
    if (type === "increase") {
      dispatch(increaseQuantity());
    } else if (type === "decrease") {
      dispatch(decreaseQuantity());
    }
  };

  const totalProducts = newCartState.totalProducts;

  return (
    <Styles.BoxContainer>
      <Styles.StackContainer spacing={5}>
        {Array.from(Array(totalProducts)).map((x, index) => (
          <NewProduct key={index} productNumber={index} />
        ))}
        <Styles.ButtonsContainer>
          <IconButton
            onClick={() => handleClick("increase")}
            aria-label="add"
            size="large"
            disabled={totalProducts >= 5}
          >
            <Styles.AddButton disabled={totalProducts >= 5} />
          </IconButton>
          <IconButton
            onClick={() => handleClick("decrease")}
            aria-label="remove"
            size="large"
            disabled={totalProducts <= 1}
          >
            <Styles.RemoveButton disabled={totalProducts <= 1} />
          </IconButton>
        </Styles.ButtonsContainer>
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
