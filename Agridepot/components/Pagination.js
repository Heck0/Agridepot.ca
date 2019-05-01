// import React, { Component } from "react";
// import styled from "styled-components";
// import Link from "next/link";

// const PaginationItem = styled.li`
//   button {
//     background-color: #ececec;
//     padding: 30px;
//   }
// `;

// class Pagination extends Component {
//   state = {};

//   changePage = e => {
//     const currentPage = e.target.name;
//     this.props.onNewPage(currentPage);
//   };

//   render() {
//     const currentPage = this.props.current;

//     let arrPagination = [];
//     const initialPage = 1;
//     console.log(arrPagination);
//     // if (currentPage != 1) {
//     //   arrPagination.push(a
//     //     <PaginationItem key={initialPage}>
//     //       <Link href={`/produits?page=${initialPage}`}>
//     //         <button name={initialPage}>&#8647;</button>
//     //       </Link>
//     //     </PaginationItem>
//     //   );
//     // }

//     // if (currentPage > 1) {
//     //   const previous = currentPage - 1;
//     //   arrPagination.push(
//     //     <PaginationItem key={previous}>
//     //       <Link href={`/produits?page=${previous}`}>
//     //         <button name={previous}>&#8678;</button>
//     //       </Link>
//     //     </PaginationItem>
//     //   );
//     // }
//     // for (let i = currentPage; i <= currentPage + 3; i++) {
//     //   arrPagination.push(
//     //     <PaginationItem key={i}>
//     //       <Link href={`/produits?page=${i}`}>
//     //         <button name={i}>{i}</button>
//     //       </Link>
//     //     </PaginationItem>
//     //   );
//     // }
//     return <Pagination>{arrPagination}</Pagination>;
//   }
// }

// export default Pagination;
