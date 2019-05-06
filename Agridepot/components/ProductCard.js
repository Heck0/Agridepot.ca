import styled from "styled-components";
import Button from "./Button";
import Variables from "./Variables";

export const ProductCardGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 320px) {
  }
`;

export const ProductItem = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  box-shadow: 2px 2px 5px #d4d4d4;
  margin-bottom: 30px;
  @media (min-width: 420px) {
    width: 49%;
  }
  @media (min-width: 768px) {
    width: 33%;
  }
  @media (min-width: 1024px) {
    width: 24%;
  }
`;
export const ProductItemInformation = styled.div`
  li:first-child {
    margin-bottom: 17px;
  }
  li:last-child {
    margin-bottom: 30px;
  }
`;

export const ProductItemContent = styled.div`
  padding: 0 20px;
`;
export const ProductBottomRow = styled.div`
  height: 50px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonProduct = styled(Button)`
  height: 50px;
  width: 60%;
`;
export const ProductInfoSupp = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  background-color: ${Variables.colors.darkGreen};
  height: 46px;
  width: 78px;
  color: white;

  span {
    font-family: Roboto;
    font-size: 24px;
  }
`;
