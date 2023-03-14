import { CardContent, CardMedia } from "@mui/material";
import * as Styles from "./CartCard.styles";
import CartImage from "../../img/shopping-venture.svg";

const CartCard = () => {
  return (
    <Styles.CardContainer>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={CartImage}
      />
      <CardContent>
        <Styles.CardTitle gutterBottom variant="h5">
          Lizard
        </Styles.CardTitle>
        <Styles.CardDescription variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Styles.CardDescription>
      </CardContent>
      <Styles.CardActionContainer>
        <Styles.CardButton size="medium" variant="contained">
          VIew cart
        </Styles.CardButton>
      </Styles.CardActionContainer>
    </Styles.CardContainer>
  );
};

export default CartCard;
