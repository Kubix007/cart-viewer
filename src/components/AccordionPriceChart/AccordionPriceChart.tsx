import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as Styles from "./AccordionPriceChart.styles";
import * as Types from "./AccordionPriceChart.types";
import ChartProduct from "../ChartProduct";

const AccordionPriceChart = ({ products }: Types.IProps) => {
  return (
    <Styles.Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Price chart</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ChartProduct products={products} />
      </AccordionDetails>
    </Styles.Accordion>
  );
};

export default AccordionPriceChart;
