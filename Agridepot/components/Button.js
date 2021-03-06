import styled from "styled-components";
import Variables from "./Variables";

const Button = styled.button`
  background-color: ${props =>
    props.primary ? Variables.colors.black : Variables.colors.darkGreen};
  color: white;
  cursor: pointer;
  float: ${props => (props.left ? "left" : null)};
`;

export default Button;
