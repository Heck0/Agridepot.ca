import React, { Component } from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Flex, Image } from "./";
import styled from "styled-components";
import Button from "./Button";
import Variables from "./Variables";
import { Menu } from "../utils/index";

const SelectLanguage = styled.div`
  margin-left: 22px;
`;
const BusinessAccess = styled.div`
  background-color: black;
  line-height: 40px;
  color: white;
  width: 216px;
  text-align: center;

  svg {
    margin-left: 10px;
  }
`;

const Logo = styled.div`
  width: 235px;
`;
const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 8fr 1fr 1fr;
  height: 100px;
  background-color: ${Variables.colors.darkGreen};
`;

const GridSubMenu = styled.div`
  height: 50px;
  background-color: ${Variables.colors.black};
  align-items: center;
  color: white;
  padding: 0 22px;
  display: grid;
  grid-template-columns: 7fr 3fr;
  align-items: center;
`;
const GridItem = styled.div`
  display: flex;
`;

const ListItem = styled.ul`
  color: white;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  font-family: Roboto Condensed;
`;

class index extends Component {
  render() {
    return (
      <>
        <Flex alignCenter justifyBetween style={{ height: "40px" }}>
          <SelectLanguage>
            <span>Choose store: </span>
          </SelectLanguage>

          <BusinessAccess>
            <Link href="/" prefetch>
              <Flex alignCenter justifyAround style={{ cursor: "pointer" }}>
                <Button primary style={{ height: "40px" }}>
                  BUSINESS ACCESS
                </Button>
                <FaArrowRight style={{ color: "white", fontSize: "1.3em" }} />
              </Flex>
            </Link>
          </BusinessAccess>
        </Flex>

        <Grid>
          <GridItem>
            <Logo style={{ marginLeft: "22px", cursor: "pointer" }}>
              <Link href="/" prefetch>
                <Image
                  src="https://www.agridepot.ca/pub/static/version1555843020/frontend/Konnexion/agridepot/en_US/images/logo-2x.png"
                  alt="Agridepot.ca"
                />
              </Link>
            </Logo>
          </GridItem>
          <GridItem
            style={{
              justifySelf: "center"
            }}
          >
            <Flex center>
              <Link href="/" prefetch>
                <Image src="../static/icn-account.svg" alt="User Icone" />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            style={{
              justifySelf: "center"
            }}
          >
            <div>
              <Link href="/" prefetch>
                <Image src="../static/icn-cart.svg" alt="User Cart" />
              </Link>
            </div>
          </GridItem>
        </Grid>
        <GridSubMenu>
          <GridItem>
            <Image
              src="../static/icn-menu.svg"
              alt="Menu"
              style={{ width: "23px", height: "15px" }}
            />
            {/* <span>SHOP BY CATEGORIES</span> */}
            <Link href="produits?page=1" prefetch>
              <a style={{ color: "white" }}>SHOP BY CATEGORIES</a>
            </Link>
          </GridItem>

          <ListItem>
            {Menu &&
              Menu.map(({ href, title }) => (
                <Link key={title} href={href} prefetch>
                  <li>{title}</li>
                </Link>
              ))}
          </ListItem>
        </GridSubMenu>
      </>
    );
  }
}
export default index;
