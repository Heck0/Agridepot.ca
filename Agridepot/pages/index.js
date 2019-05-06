import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

import { Flex, FlexItem, Container, Image } from "../components";
import Button from "../components/Button";
// import AddToCart from "../components/AddToCart";
import ViewAll from "../components/ViewAll";
import Variables from "../components/Variables";
import {
  ProductCardGroup,
  ProductItem,
  ProductItemInformation,
  ProductItemContent,
  ProductBottomRow,
  ButtonProduct,
  ProductInfoSupp
} from "../components/ProductCard";
import { ShopByType } from "../utils/index";

const Section = styled.section`
  margin-top: 75px;
  @media (min-width: 768px) {
    margin-top: 150px;
    &:nth-child(odd) {
      background-color: #ececec;
    }
  }
`;

const Title = styled.h2`
  color: ${Variables.colors.slimeGreen};
  font-size: bold;
`;

const SlimeText = styled.span`
  color: ${Variables.colors.darkGreen};
  margin-left: 5px;
  @media (min-width: 475px) {
    margin-left: 17px;
  }
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
  position: relative;

  @media (max-width: 475px) {
    height: 482px;
  }

  & div:first-of-type {
    text-align: center;
    color: white;
  }

  p {
    margin: 10px 0;
    position: relative;
    font-size: 74px;
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

    @media (max-width: 475px) {
      max-width: 90%;
      margin: 0 auto;
      font-size: 28px;
    }
  }

  span {
    padding-bottom: 10px;
    font-size: 30px;
    @media (max-width: 475px) {
      font-size: 16px;
    }
  }
`;
const HeroContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  margin-top: 30px;

  div {
    @media (max-width: 475px) {
      flex-flow: column nowrap;
      align-items: center;
      margin-top: 20px;
    }
  }

  button {
    width: 200px;
    height: 50px;
    cursor: pointer;
    line-height: 50px;

    @media (max-width: 475px) {
      width: 214px;
      margin-bottom: 10px;
    }
  }
`;
const HeroSectionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 475px) {
    width: 90%;
  }
`;

const WhatsAgridepotContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    padding-bottom: inherit;
    flex-flow: row nowrap;
  }
`;

const WhatsAgridepot = styled.span`
  margin-bottom: 12px;
  display: block;
`;
const WhatsAgridepotContent = styled.div`
  margin-left: 100px;
  line-height: 27px;

  @media (max-width: 475px) {
    margin-left: 0;
    margin-top: 44px;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const WhatsAgridepotImageContainer = styled.div`
  width: 100%;
  margin-left: 40px;
  margin-top: -40px;

  @media (min-width: 768px) {
    margin: inherit;
  }
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

  @media (max-width: 1024px) {
    overflow: hidden;
  }
  @media (max-width: 1024px) {
    img {
      max-width: inherit;
      height: 100%;
    }
  }
`;

const RewardProgramContent = styled.div`
  position: absolute;
  width: 80%;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h3 {
    font-size: 28px;
    margin-bottom: 20px;

    span {
      color: ${Variables.colors.slimeGreen};
    }
    @media (min-width: 768px) {
      font-size: 50px;
      font-family: Roboto;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 16px;
    margin-bottom: 15px;
    @media (min-width: 768) {
      font-size: 28px;
    }
  }
  a {
    font-size: 14px;
  }
`;

const RewardProgramLink = styled.div``;
const BuyInBulkGroup = styled.div`
  margin-top: 37px;
  margin-bottom: 20px;
`;

const ProductBulkSize = styled.div``;

const SpecialElementsGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

const SpecialElement = styled.div`
  position: relative;

  img:first-child() {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 49%;
  }

  h3 {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 14px;
    max-width: 60%;
    color: white;

    @media (min-width: 320px) {
      font-size: 24px;
      line-height: 28px;
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
  }
`;

const SpecialElementAction = styled.div`
  font-size: 12px;
  position: absolute;
  right: 2%;
  bottom: 7%;
  max-width: 24%;
  text-align: right;

  @media (min-width: 320px) {
  }
  img {
    display: none;
  }

  @media (min-width: 768px) {
    right: 13px;
    font-size: 14px;
    cursor: pointer;
    img {
      margin-left: 5px;
    }
  }

  button {
    background-color: inherit;
    border: none;
    color: white;
    cursor: pointer;
    text-align: right;

    @media (min-width: 320px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
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
  height: 240px;
  align-items: center;
  width: 100%;
  position: relative;
  color: white;
  border-right: 1px solid ${Variables.colors.slimeGreen};
  border-bottom: 1px solid ${Variables.colors.slimeGreen};
  background-color: ${Variables.colors.darkGreen};

  @media (min-width: 320px) {
    width: 50%;
  }
  @media (min-width: 600px) {
    width: 33.3%;
  }

  @media (min-width: 900px) {
    width: calc(100% / ${ShopByType.length});
  }

  img,
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    top: 45px;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
    bottom: 25px;
  }
`;

const TypeList = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
`;
class index extends Component {
  render() {
    return (
      <>
        <HeroSection>
          <HeroSectionContent>
            <Flex column justifyCenter>
              <span>THE WIDEST SELECTION OF</span>
              <p>Agriculture Products in Canada!</p>
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
          </HeroSectionContent>
        </HeroSection>

        <Section>
          <Container>
            <WhatsAgridepotContainer>
              <div>
                <WhatsAgridepot>WHAT IS AGRIDEPOT.CA</WhatsAgridepot>
                <Title>
                  The best farming products
                  <SlimeText>delivered to your door.</SlimeText>
                </Title>
                <WhatsAgridepotContent>
                  <p>
                    Our mission is to provide the widest variety of quality
                    agricultural products at the best price, everyday. Buy in
                    bulk and save more!
                  </p>
                  <Link href="/" prefetch>
                    <StartShopping>Start shopping</StartShopping>
                  </Link>
                </WhatsAgridepotContent>
              </div>

              <WhatsAgridepotImageContainer>
                <Image
                  src="https://www.agridepot.ca/pub/media/wysiwyg/group-10.png"
                  alt="empty"
                />
              </WhatsAgridepotImageContainer>
            </WhatsAgridepotContainer>
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
              <ProductCardGroup>
                {/* Loop through returned obj for great deals */}
                <ProductItem>
                  <ProductInfoSupp>
                    <span>-40%</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/500"
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
                      src="https://via.placeholder.com/500"
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
                      src="https://via.placeholder.com/500"
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
                      src="https://via.placeholder.com/500"
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
              </ProductCardGroup>
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
              <ProductCardGroup>
                <ProductItem>
                  <ProductInfoSupp>
                    <span>3+</span>
                  </ProductInfoSupp>
                  <ProductItemInformation>
                    <Image
                      src="https://via.placeholder.com/500"
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
                      src="https://via.placeholder.com/500"
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
                      src="https://via.placeholder.com/500"
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
                      src="https://via.placeholder.com/500"
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
              </ProductCardGroup>
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
              <SpecialElement>
                <Image src="../static/bg-tile-guide.png" alt="bg-tile-guide" />
                <h3>
                  <span>Get the latest farming supply </span> guide 2019
                </h3>
                <SpecialElementAction>
                  <button>DOWNLOAD PDF</button>
                  <Image src="../static/icn-download.svg" alt="icn-download" />
                </SpecialElementAction>
              </SpecialElement>

              <SpecialElement>
                <Image src="../static/bg-tile-quote.png" alt="bg-tile-quote" />
                <h3>
                  <span> Do you need </span> large quantities of products?
                </h3>
                <SpecialElementAction>
                  <button>GET A QUOTE</button>
                  <Image src="../static/icn-arrow.svg" alt="icn-arrow" />
                </SpecialElementAction>
              </SpecialElement>
            </SpecialElementsGroup>
          </Container>

          <ShopByTypeGroup>
            <h3>
              Shop <span>By Type</span>
            </h3>

            <TypeList>
              {ShopByType &&
                ShopByType.map(({ href, title, img }) => (
                  <Link href={href} key={title} prefetch>
                    <Type key={title} title={title}>
                      <Flex column alignCenter>
                        <Flex column center>
                          <Image src={img} al={title} />
                          <span>{title}</span>
                        </Flex>
                      </Flex>
                    </Type>
                  </Link>
                ))}
            </TypeList>
          </ShopByTypeGroup>
        </Section>
      </>
    );
  }
}
export default index;
