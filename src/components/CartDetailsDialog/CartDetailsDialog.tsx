import { IconButton } from "@mui/material";
import * as Types from "./CartDetailsDialog.types";
import * as Styles from "./CartDetailsDialog.styles";
import CloseIcon from "@mui/icons-material/Close";
import CartDetails from "../CartDetails";

const CartDetailsDialog = ({ open, setOpen, cart }: Types.IProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Styles.DialogContainer
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Styles.Title>
        Cart Details
        {open ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Styles.Title>
      <Styles.Content dividers>
        <CartDetails cart={cart} />
      </Styles.Content>
    </Styles.DialogContainer>
  );
};

export default CartDetailsDialog;
