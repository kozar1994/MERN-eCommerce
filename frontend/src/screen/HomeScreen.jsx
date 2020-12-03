import React from "react";

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

import products from "./../products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
              <Product item={item}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
