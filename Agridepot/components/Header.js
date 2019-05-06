import React, { Component } from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Flex, FlexItem, Image } from "./";
import styled from "styled-components";
import Button from "./Button";
import Variables from "./Variables";
import { Menu } from "../utils/index";

const SelectLanguage = styled.div`
  margin-left: 22px;

  @media (max-width: 320px) {
    font-size: 14px;
  }
  @media (max-width: 475px) {
    width: 50%;
  }
`;
const BusinessAccess = styled.div`
  background-color: black;
  line-height: 40px;
  color: white;
  width: 216px;
  text-align: center;
  @media (max-width: 475px) {
    width: 50%;
  }
  svg {
    margin-left: 10px;
  }
  button {
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
  span {
    @media (max-width: 475px) {
      display: none;
    }
  }
`;

const Logo = styled.div`
  width: 235px;
  cursor: pointer;
`;

const MenuAgridepotNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${Variables.colors.darkGreen};
  padding-left: 22px;

  @media (max-width: 475px) {
    justify-content: center;
    margin-left: -22px;
  }
`;
const IconeNavGroup = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 475px) {
    display: none;
  }
`;
const IconeNav = styled.div`
  cursor: pointer;
  width: 108px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${Variables.colors.slimeGreen};

  &:last-child {
    background-color: ${Variables.colors.slimeGreen};
  }
`;
const SubMenuAgridepotNav = styled.div`
  height: 50px;
  background-color: ${Variables.colors.black};

  a {
    text-decoration: none;
  }
  a:hover,
  li:hover {
    text-decoration: underline;
  }
  li {
    padding-right: 20px;
  }
  & li {
    cursor: pointer;
  }
  & > div:first-child {
    padding-left: 22px;
  }

  @media (max-width: 475px) {
    div > div:first-of-type a {
      display: none;
    }
  }
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
                  BUSINESS <span>ACCESS</span>
                </Button>
                <FaArrowRight style={{ color: "white", fontSize: "1.3em" }} />
              </Flex>
            </Link>
          </BusinessAccess>
        </Flex>

        <MenuAgridepotNav>
          <Logo>
            <Link href="/" prefetch>
              <Image
                src="https://www.agridepot.ca/pub/static/version1555843020/frontend/Konnexion/agridepot/en_US/images/logo-2x.png"
                alt="Agridepot.ca"
              />
            </Link>
          </Logo>

          <IconeNavGroup>
            <IconeNav>
              <Link href="/" prefetch>
                <Image src="../static/icn-account.svg" alt="User Icone" />
              </Link>
            </IconeNav>
            <IconeNav>
              <Link href="/" prefetch>
                <Image src="../static/icn-cart.svg" alt="User Cart" />
              </Link>
            </IconeNav>
          </IconeNavGroup>
        </MenuAgridepotNav>

        <SubMenuAgridepotNav>
          <Flex full justifyBetween alignCenter>
            <Flex alignCenter>
              <Image
                src="../static/icn-menu.svg"
                alt="Menu"
                style={{ width: "23px", height: "15px" }}
              />
              {/* <span>SHOP BY CATEGORIES</span> */}
              <Link href="produits?page=1" prefetch>
                <a style={{ color: "white" }}>SHOP BY CATEGORIES</a>
              </Link>
            </Flex>

            <ListItem>
              {Menu &&
                Menu.map(({ href, title }) => (
                  <Link key={title} href={href} prefetch>
                    <li>{title}</li>
                  </Link>
                ))}
            </ListItem>
          </Flex>
        </SubMenuAgridepotNav>
      </>
    );
  }
}
export default index;
