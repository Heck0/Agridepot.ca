import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

import { Flex, FlexItem, Container, Image } from "../components";
import Button from "../components/Button";
// import AddToCart from "../components/AddToCart";
import ViewAll from "../components/ViewAll";
import Variables from "../components/Variables";
import {
  ProductItem,
  ProductItemInformation,
  ProductItemContent,
  ProductBottomRow,
  ButtonProduct,
  ProductInfoSupp
} from "../components/ProductCard";
import { ShopByType } from "../utils/index";
const Section = styled.section`
  margin-top: 150px;

  &:nth-child(odd) {
    background-color: #ececec;
  }
`;

const Title = styled.h2`
  font-size: 60px;
  color: ${Variables.colors.slimeGreen};
`;

const SlimeText = styled.span`
  color: ${Variables.colors.darkGreen};
  margin-left: 17px;
`;

const StartShopping = styled.a`
  color: ${Variables.colors.darkGreen};
  border-bottom: 3px solid ${Variables.colors.darkGreen};
  padding-bottom: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 44px;
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

const WhatsAgridepot = styled.span`
  margin-bottom: 12px;
  display: block;
`;
const DealGroup = styled.div`
  margin-bottom: 20px;
`;

const ViewAllGroup = styled.div`
  padding-bottom: 60px;
`;

const RewardProgramGroup = styled.div`
  position: relative;
  margin-top: -100px;
  margin-bottom: 68px;
`;

const RewardProgramContent = styled.div`
  position: absolute;
  width: 100%;
  color: white;
  left: 50%;
  top: 65px;
  transform: translateX(-50%);
  text-align: center;

  h3 {
    font-size: 50px;
    font-family: Roboto;
    margin-bottom: 20px;
    span {
      color: ${Variables.colors.slimeGreen};
    }
  }
  p {
    margin-bottom: 30px;
  }
`;

const RewardProgramLink = styled.div``;
const BuyInBulkGroup = styled.div`
  margin-top: 37px;
  margin-bottom: 20px;
`;

const ProductBulkSize = styled.div``;

const SpecialElementsGroup = styled.div`
  margin-bottom: 50px;
`;

const SpecialElement = styled.div`
  width: 49%;
  position: relative;

  h3 {
    position: absolute;
    top: 28px;
    left: 37px;
    color: white;
    font-size: 34px;
    max-width: 360px;
    line-height: 42px;
  }
  &:nth-child(even) {
    span {
      color: ${Variables.colors.slimeGreen};
    }
  }

  &:nth-child(odd) {
    span {
      color: ${Variables.colors.darkGreen};
    }
  }

  button {
    background-color: inherit;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const SpecialElementAction = styled.div`
  position: absolute;
  bottom: 24px;
  right: 19px;
  font-size: 14px;
  cursor: pointer;
  img {
    margin-left: 5px;
  }
`;

const ShopByTypeGroup = styled.div`
  h3 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 44px;
    color: ${Variables.colors.slimeGreen};
    span {
      color: ${Variables.colors.darkGreen};
    }
  }
`;

const Type = styled.div`
  width: calc(100% / ${ShopByType.length});
  background-color: ${Variables.colors.darkGreen};
`;

const TypeList = styled.div``;
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
                <WhatsAgridepot>WHAT IS AGRIDEPOT.CA</WhatsAgridepot>
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
            <DealGroup>
              <Flex justifyBetween>
                {/* Loop through returned obj for great deals */}
                <ProductItem>
                  <ProductInfoSupp>
                    <span>-40%</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>-40%</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>-40%</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>-40%</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
              </Flex>
            </DealGroup>
            <ViewAllGroup>
              <Flex justifyEnd>
                <ViewAll>
                  <Link href="/" prefetch>
                    <Flex center>
                      <a>View all</a>
                      <Image
                        style={{ transform: "rotate(-90deg" }}
                        src="../static/down-arrow.svg"
                        alt="down arrow"
                      />
                    </Flex>
                  </Link>
                </ViewAll>
              </Flex>
            </ViewAllGroup>
          </Container>
        </Section>
        <Section>
          <Container>
            <RewardProgramGroup>
              <Image src="../static/bg-rewards.png" alt="bg-rewards" />
              <RewardProgramContent>
                <h3>
                  It pays to shop on <span>Agridepot.ca</span>
                </h3>
                <p>GET 1 AGRI-POINT FOR EVERY DOLLAR SPENT.</p>
                <RewardProgramLink>
                  <Link href="/" prefetch>
                    <Flex center>
                      <a>REWARD PROGRAM</a>
                      {/* <Image src="../static/down-arrow.svg" alt="down-arrow" /> */}
                    </Flex>
                  </Link>
                </RewardProgramLink>
              </RewardProgramContent>
            </RewardProgramGroup>

            <Flex alignCenter>
              <Image
                style={{ width: "134px", height: "134px" }}
                src="../static/icn-trolley-2.svg"
                alt="tag"
              />
              <Title style={{ marginLeft: "40px" }}>
                Buy in bulk
                <SlimeText>and save</SlimeText>
              </Title>
            </Flex>

            <BuyInBulkGroup>
              <Flex justifyBetween>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>3+</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>5+</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>20+</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>10+</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/300"
                      alt="placeholder"
                    />
                    <ProductItemContent>
                      <h4>Product's Name</h4>
                      <ul>
                        <li>Product's Description</li>
                        <li style={{ color: Variables.colors.darkGreen }}>
                          Clearance ~New Price~
                        </li>
                        <li>
                          Our price: <span>~Old Price~</span>
                        </li>
                      </ul>
                    </ProductItemContent>
                    <ProductBottomRow>
                      <ButtonProduct primary left>
                        Add to Cart
                      </ButtonProduct>
                      <Flex
                        row
                        nowrap
                        justifyAround
                        alignCenter
                        style={{ height: "100%" }}
                      >
                        <Image src="../static/icn-star.svg" alt="rating" />
                        <Image src="../static/icn-compare.svg" alt="rating" />
                      </Flex>
                    </ProductBottomRow>
                  </ProductItemInformation>
                </ProductItem>
              </Flex>
            </BuyInBulkGroup>
            <ViewAllGroup>
              <Flex justifyEnd>
                <ViewAll>
                  <Link href="/" prefetch>
                    <Flex center>
                      <a>View all</a>
                      <Image
                        style={{ transform: "rotate(-90deg" }}
                        src="../static/down-arrow.svg"
                        alt="down arrow"
                      />
                    </Flex>
                  </Link>
                </ViewAll>
              </Flex>
            </ViewAllGroup>

            <SpecialElementsGroup>
              <Flex justifyBetween>
                <SpecialElement>
                  <Image
                    src="../static/bg-tile-guide.png"
                    alt="bg-tile-guide"
                  />
                  <h3>
                    <span>Get the latest farming supply </span> guide 2019
                  </h3>
                  <SpecialElementAction>
                    <Flex center>
                      <button>DOWNLOAD PDF</button>
                      <Image
                        src="../static/icn-download.svg"
                        alt="icn-download"
                      />
                    </Flex>
                  </SpecialElementAction>
                </SpecialElement>

                <SpecialElement>
                  <Image
                    src="../static/bg-tile-quote.png"
                    alt="bg-tile-quote"
                  />
                  <h3>
                    <span> Do you need </span> large quantities of products?
                  </h3>
                  <SpecialElementAction>
                    <Flex center>
                      <button>GET A QUOTE</button>
                      <Image src="../static/icn-arrow.svg" alt="icn-arrow" />
                    </Flex>
                  </SpecialElementAction>
                </SpecialElement>
              </Flex>
            </SpecialElementsGroup>
          </Container>

          <ShopByTypeGroup>
            <h3>
              Shop <span>By Type</span>
            </h3>

            <TypeList>
              <Flex full>
                {ShopByType &&
                  ShopByType.map(({ href, title, img }) => (
                    <Type>
                      <Link href={href} prefetch>
                        <Flex column alignCenter>
                          <Image src={img} al={title} />
                          <span>{title}</span>
                        </Flex>
                      </Link>
                    </Type>
                  ))}
              </Flex>
            </TypeList>
          </ShopByTypeGroup>
        </Section>
      </>
    );
  }
}
export default index;
