export interface ICartState {
  data: {
    carts: {
      id: number;
      products: {
        id: number;
        title: string;
        price: number;
        quantity: number;
        total: number;
        discountPercentage: number;
        discountedPrice: number;
      }[];
      total: number;
      discountedTotal: number;
      userId: number;
      totalProducts: number;
      totalQuantity: number;
    }[];
    total: number;
    skip: number;
    limit: number;
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IProductData {
  id: number;
  quantity: number;
}
