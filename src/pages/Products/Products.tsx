import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Styles from "./Products.styles";
import Spinner from "../../components/Spinner";
import ProductCardList from "../../components/ProductCardList";
import ShoppingCartButton from "../../components/ShoppingCartButton";

const Products = () => {
  const { isLoading } = useSelector((state: RootState) => state.products);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Styles.Container>
        <ProductCardList data-testid="productCardList" />
      </Styles.Container>
      <ShoppingCartButton />
    </>
  );
};

export default Products;
