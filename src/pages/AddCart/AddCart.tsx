import { Container } from "@mui/material";
import PaneLayout from "../../components/PaneLayout";
import * as Styles from "./AddCart.styles";

const AddCart = () => {
  return (
    <Container maxWidth="sm">
      <Styles.Center>
        <Styles.Window elevation={20}>
          <PaneLayout />
        </Styles.Window>
      </Styles.Center>
    </Container>
  );
};

export default AddCart;
