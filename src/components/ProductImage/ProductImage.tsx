import * as Types from "./ProductImage.types";

const ProductImage = ({ source }: Types.IProps) => {
  return <img src={source} alt={source} />;
};

export default ProductImage;
