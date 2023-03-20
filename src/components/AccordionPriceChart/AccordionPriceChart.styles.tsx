import styled from "styled-components";
import Accordeon from "@mui/material/Accordion";
import { AccordionDetails } from "@mui/material";

export const Accordion = styled(Accordeon)`
  &.MuiAccordion-root {
    margin-top: 5px;
    width: auto;
  }
  & .MuiCollapse-root {
    width: -webkit-fill-available;
  }
`;

export const Details = styled(AccordionDetails)`
  &.MuiAccordionDetails-root {
    display: flex;
    justify-content: center;
    padding: 0px;
  }
`;
