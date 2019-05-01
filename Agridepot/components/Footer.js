import Link from "next/link";
import styled from "styled-components";
import { Container } from "./";
import Variables from "../components/Variables";

const FooterContainer = styled.footer`
  background: ${Variables.colors.black};
  color: #fff;
  padding: 2em;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <h3>Footer</h3>
    </Container>
  </FooterContainer>
);

export default Footer;
