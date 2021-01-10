import React from "react";
import { Link } from "react-router-dom"

import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ item }) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${item._id}`}>
        <Card.Img variant="top" src={item.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${item._id}`}>
          <Card.Title as="div">{item.name}</Card.Title>
        </Link>
        {/* <Card.Text as="div">
          <div className="my-3">
            {item.rating} from {item.numReviews} reviews
          </div>
        </Card.Text> */}

        <Rating color="tomato" value={item.rating} text={`${item.numReviews} reviews`} />

        <Card.Text as="h3">
          ${item.price}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Product;
