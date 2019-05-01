import React, { Component } from "react";
import Link from "next/link";
import { getProducts } from "../lib/moltin";

import { Flex, FlexItem, Container, Image, Layout } from "../components";
import styled from "styled-components";
import Variables from "../components/Variables";

const Products = styled.div`
  h3,
  h4,
  li {
    margin-top: 10px;
  }
`;
const ProductsGrid = styled.div`
  display: grid;
  /* justify-items: center; */
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 15px;
  margin-top: 70px;
  @media (max-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 95%;
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const ProductsItem = styled.div``;
const ImageContainer = styled.div`
  width: 100%;
`;

const Sku = styled.li`
  font-size: 12px;
`;

const Pagination = styled.div`
  margin: 30px auto;
`;
const PaginationItem = styled.li`
  button {
    margin-right: 10px;
    padding: 20px;
    background-color: #ececec;
  }
`;

class Produits extends Component {
  state = { page: 1 };
  static getInitialProps = async ({ query: { page } }) => {
    const res = await getProducts(page - 1);

    if (!res) {
      return;
    }
    const products = res.data;
    const pagination = res.meta.page;

    return {
      products: products,
      pagination: pagination,
      page
    };

    // return {
    //   ...data
    // };
    // const products = data.map(product => {
    //   const imageId = product.relationships.main_image
    //     ? product.relationships.main_image.data.id
    //     : false;

    //   return {
    //     ...product,
    //     image: imageId
    //       ? included.main_images.find(img => img.id === imageId).link.href
    //       : "https://via.placeholder.com/150"
    //   };
    // });
  };

  componentDidMount = () => {
    const { pagination } = this.props;
    this.setState({ page: pagination.current });
  };
  changePage = e => {
    const currentPage = e.target.name;

    this.setState({ page: currentPage });
  };

  render() {
    const { products, pagination, page } = this.props;
    // const arrPagination = Object.keys(pagination).map(key => pagination[key]);
    let arrPagination = [];

    const initialPage = 1;

    if (pagination.current != 1) {
      arrPagination.push(
        <PaginationItem key={initialPage}>
          <Link href={`/produits?page=${initialPage}`}>
            <button name={initialPage} onClick={this.changePage}>
              &#8647;
            </button>
          </Link>
        </PaginationItem>
      );
    }
    if (pagination.current > 1) {
      const previous = pagination.current - 1;
      arrPagination.push(
        <PaginationItem key={previous}>
          <Link href={`/produits?page=${previous}`}>
            <button name={previous}>&#8678;</button>
          </Link>
        </PaginationItem>
      );
    }
    for (let i = pagination.current; i <= pagination.current + 3; i++) {
      arrPagination.push(
        <PaginationItem key={i}>
          <Link href={`/produits?page=${i}`}>
            <button name={i}>{i}</button>
          </Link>
        </PaginationItem>
      );
    }

    if (pagination.current != pagination.total) {
      const next = pagination.current + 1;
      arrPagination.push(
        <PaginationItem key="next">
          <Link href={`/produits?page=${next}`}>
            <button name="next"> &#8680;</button>
          </Link>
        </PaginationItem>
      );
    }

    if (pagination.current != pagination.total) {
      arrPagination.push(
        <PaginationItem key="lastPagination">
          <Link href={`/produits?page=${pagination.total}`}>
            <button name="lastPagination">&#8649;</button>
          </Link>
        </PaginationItem>
      );
    }
    return (
      <>
        <Container>
          <h1>Produits</h1>
          <span>
            Page {pagination.current} of {pagination.total}
          </span>
          <Products>
            <ProductsGrid>
              {products &&
                products.map(({ meta, name, sku, price, slug }) => (
                  <Flex column alignCenter key={sku}>
                    <ImageContainer>
                      <Image src="https://via.placeholder.com/300" alt="alt" />
                    </ImageContainer>
                    <Flex full column alignStart>
                      <h3>{name}</h3>
                      <ul>
                        <Sku style={{ marginTop: "0" }}>{sku}</Sku>
                        <li>
                          {price[0].amount}$ {price[0].currency}{" "}
                        </li>
                      </ul>
                    </Flex>
                  </Flex>
                ))}
            </ProductsGrid>
          </Products>
          <Pagination>
            <Flex full center wrap>
              {arrPagination}
            </Flex>
          </Pagination>
        </Container>
      </>
    );
  }
}

export default Produits;
