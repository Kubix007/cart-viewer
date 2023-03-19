import * as SharedTypes from "../../shared/types";

export interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cart: SharedTypes.ICartData;
}
