import * as SharedTypes from "../../shared/types";

export interface IMediaProps {
  component: string;
  alt: string;
  height: string;
}

export interface IProps {
  carts: SharedTypes.ICartData;
}
