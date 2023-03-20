import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Styles from "./ProductDetails.styles";
import * as Types from "./ProductDetails.types";

const ProductDetails = ({ product }: Types.IProps) => {
  const products = useSelector((state: RootState) => state.products);

  const getProductDetails = (productId: number) => {
    return products.data.products.find((item) => item.id === productId);
  };
  return (
    <Styles.PorductContainer>
      <Styles.ProductImage>
        <Styles.Image src={getProductDetails(product.id)?.images[0]} />
      </Styles.ProductImage>
      <Styles.ProductDetails>
        <Styles.TopRow>
          <Styles.ProductName>{product.title}</Styles.ProductName>
          <Styles.ProductPrice>
            {product.discountedPrice}$
            <Styles.OldPrice>{product.total}$</Styles.OldPrice>
          </Styles.ProductPrice>
        </Styles.TopRow>
        <Styles.MiddleRow>
          <Styles.ProductCategory>
            {getProductDetails(product.id)?.category}
          </Styles.ProductCategory>
        </Styles.MiddleRow>
        <Styles.BottomRow>
          <Styles.ProductQuantity>
            Quantity: {product.quantity}
          </Styles.ProductQuantity>
        </Styles.BottomRow>
      </Styles.ProductDetails>
      <Styles.ProductDivider />
    </Styles.PorductContainer>
  );
};

export default ProductDetails;
