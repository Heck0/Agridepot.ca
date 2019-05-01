import React, { Component } from "react";
import { Flex, FlexItem, Container, Image, Layout } from "../components";
import Button from "../components/Button";
import styled from "styled-components";
import Link from "next/link";
import Variables from "../components/Variables";

const Section = styled.section`
  margin-top: 150px;

  &:nth-child(odd) {
    background-color: #ececec;
  }
`;

const Title = styled.h2`
  font-size: 60px;
  margin-top: 12px;
  color: ${Variables.colors.darkGreen};
`;

const SlimeText = styled.span`
  color: ${Variables.colors.slimeGreen};
  margin-left: 17px;
`;

const StartShopping = styled.a`
  color: ${Variables.colors.darkGreen};
  border-bottom: 3px solid ${Variables.colors.darkGreen};
  padding-bottom: 5px;
  cursor: pointer;
`;

const HeroSection = styled.div`
  height: 584px;
  background: url("../static/countryside-2326787_1920.jpg") no-repeat;
  background-size: cover;
  p {
    margin: 10px 0;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -10%;
      left: 50%;
      transform: translateX(-50%);
      width: 5%;
      height: 3px;
      background-color: white;
    }
  }
`;
const HeroContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  margin-top: 30px;

  button {
    width: 200px;
    height: 50px;
    cursor: pointer;
    line-height: 50px;
  }
`;

class index extends Component {
  render() {
    return (
      <>
        <HeroSection>
          <Flex alignCenter justifyCenter style={{ height: "584px" }}>
            <Flex column style={{ textAlign: "center", color: "white" }}>
              <span style={{ fontSize: "30px" }}>THE WIDEST SELECTION OF</span>
              <p style={{ fontWeight: "Bold", fontSize: "74px" }}>
                Agriculture Products in Canada!
              </p>
              <HeroContainer>
                <Flex justifyBetween>
                  <Link href="/" prefetch>
                    <Button primary>EXPLORE CATEGORIES</Button>
                  </Link>
                  <Link href="/" prefetch>
                    <Button>OPEN BUSINESS ACCOUNT</Button>
                  </Link>
                </Flex>
              </HeroContainer>
            </Flex>
          </Flex>
        </HeroSection>

        <Section>
          <Container>
            <Flex>
              <FlexItem style={{ flex: "1.4" }}>
                <span>WHAT IS AGRIDEPOT.CA</span>
                <Title>
                  The best farming products
                  <SlimeText>delivered to your door.</SlimeText>
                </Title>
                <div style={{ marginLeft: "100px", marginTop: "44px" }}>
                  <p>
                    Our mission is to provide the widest variety of quality
                    agricultural products at the best price, everyday. Buy in
                    bulk and save more!
                  </p>
                  <Link href="/" prefetch>
                    <StartShopping>Start shopping</StartShopping>
                  </Link>
                </div>
              </FlexItem>
              <FlexItem style={{ flex: "1" }}>
                <div>
                  <Image
                    src="https://www.agridepot.ca/pub/media/wysiwyg/group-10.png"
                    alt="empty"
                  />
                </div>
              </FlexItem>
            </Flex>
          </Container>
        </Section>

        <Section>
          <Container>
            <Flex alignCenter style={{ padding: "50px 0" }}>
              <Image
                style={{ width: "114px" }}
                src="../static/icn-tag.svg"
                alt="tag"
              />
              <Title style={{ marginLeft: "40px" }}>
                Don't miss out on these
                <SlimeText style={{ display: "block", marginLeft: "0" }}>
                  great deals
                </SlimeText>
              </Title>
            </Flex>
          </Container>
        </Section>
      </>
    );
  }
}
export default index;
