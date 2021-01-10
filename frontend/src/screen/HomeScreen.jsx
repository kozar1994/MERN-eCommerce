import React, { useEffect } from "react";

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

import { listProducts } from "../actions/productAction";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Product</h1>
      {loading ? (
        <h2><Loader /></h2>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
            <Row>
              {products.map((item) => {
                return (
                  <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                    <Product item={item} />
                  </Col>
                );
              })}
            </Row>
          )}
    </>
  );
};

export default HomeScreen;
