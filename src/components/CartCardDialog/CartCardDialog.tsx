import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { deleteCart } from "../../features/carts/cartsSlice";
import * as Types from "./CartCardDialog.types";
import { toast } from "react-toastify";

const CartCardDialog = ({ open, setOpen, cartId }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.carts);

  const handleConfirm = async () => {
    await dispatch(deleteCart(cartId.toString()));
    toast.success("Cart has been deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">DELETE CART</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this cart?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>NO</Button>
        <Button onClick={handleConfirm} autoFocus>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartCardDialog;
