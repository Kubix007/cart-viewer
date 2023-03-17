import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { reset } from "../../features/newCart/newCartSlice";
import { toast } from "react-toastify";
import * as Styles from "./ShoppingCart.styles";
import * as SharedTypes from "../../shared/types";
import { removeProduct } from "../../features/newCart/newCartSlice";
import { createCart } from "../../features/carts/cartsSlice";

const ShoppingCart = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const { products: myCartProducts, totalProducts: myCartTotalProducts } =
    useSelector((state: RootState) => state.newCart);

  const getProductDetails = (product: SharedTypes.ISingleProduct) => {
    return products.data.products.find((item) => item.id === product.productId);
  };

  const calculateTotalValue = () => {
    return myCartProducts
      .map((product) => getProductDetails(product)?.price!)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const mapCartToRequest = () => {
    let products: any = [];
    myCartProducts.map((item) =>
      products.push({ id: item.productId, quantity: item.quantity })
    );
    return { userId: 1, products: products };
  };

  const handleDeleteButton = (productId: number) => {
    dispatch(removeProduct(productId));
    toast.success("Product has been deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleClearButton = () => {
    dispatch(reset());
    toast.success("Cart has been cleared!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSaveCartButton = async () => {
    try {
      await dispatch(createCart(mapCartToRequest()));
      toast.success("Cart has been added!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {}
    toast.error("ERROR: Cart has not been added!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (myCartTotalProducts === 0) {
    return (
      <Styles.ShoppingCartContainer
        sx={{ position: "fixed", right: 30, bottom: 70 }}
      >
        <Styles.CartTitle>My cart</Styles.CartTitle>
        <Styles.DividerLine />
        <Styles.EmptyCartContainer>
          <Styles.EmptyCartInfo>
            Your shopping cart is empty
          </Styles.EmptyCartInfo>
          <Styles.EmptyCartIcon />
        </Styles.EmptyCartContainer>
      </Styles.ShoppingCartContainer>
    );
  }

  return (
    <Styles.ShoppingCartContainer
      sx={{ position: "fixed", right: 30, bottom: 70 }}
    >
      <Styles.CartTitle>My cart</Styles.CartTitle>
      <Styles.DividerLine />
      <Styles.TotalProducts>
        Total products: {myCartTotalProducts}
      </Styles.TotalProducts>
      <Styles.ProductsList>
        {myCartProducts.map((item, index) => (
          <Styles.Product key={item.id}>
            <Styles.ProductImageContainer>
              <img
                src={getProductDetails(item)?.images[0]}
                alt={getProductDetails(item)?.title}
                height={72}
                width={72}
              />
            </Styles.ProductImageContainer>
            <Styles.ProductInfo>
              <Styles.ProductName>
                {getProductDetails(item)?.title}
              </Styles.ProductName>
              <Styles.ProductCategory>
                {getProductDetails(item)?.category}
              </Styles.ProductCategory>
              <Styles.ProductPrice>
                {getProductDetails(item)?.price}$
              </Styles.ProductPrice>
              <Styles.ProductQuantity>
                Quantity: {item.quantity}
              </Styles.ProductQuantity>
            </Styles.ProductInfo>
            <Styles.RemoveContainer>
              <Styles.RemoveButton onClick={() => handleDeleteButton(index)}>
                <Styles.RemoveIcon />
              </Styles.RemoveButton>
            </Styles.RemoveContainer>
          </Styles.Product>
        ))}
      </Styles.ProductsList>
      <Styles.TotalPriceContainer>
        <Styles.TotalPrice>Total:</Styles.TotalPrice>
        <Styles.TotalPriceValue>
          {calculateTotalValue()}$
        </Styles.TotalPriceValue>
      </Styles.TotalPriceContainer>
      <Styles.ButtonsContainer>
        <Styles.ButtonSaveCart size="small" onClick={handleSaveCartButton}>
          Save cart
        </Styles.ButtonSaveCart>
        <Styles.ButtonClearCart size="small" onClick={handleClearButton}>
          Clear all
        </Styles.ButtonClearCart>
      </Styles.ButtonsContainer>
    </Styles.ShoppingCartContainer>
  );
};

export default ShoppingCart;
