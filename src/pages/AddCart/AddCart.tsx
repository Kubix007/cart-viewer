import { Container, Typography } from "@mui/material";
import PaneLayout from "../../components/PaneLayout";
import * as Styles from "./AddCart.styles";

const AddCart = () => {
  return (
    <Container maxWidth="sm">
      <Styles.Center>
        <Typography variant="h2" component="h2">
          Add new cart
        </Typography>
        <Styles.Window elevation={20}>
          <PaneLayout />
        </Styles.Window>
      </Styles.Center>
    </Container>
  );
};

export default AddCart;
