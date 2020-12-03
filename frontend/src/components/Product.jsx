import React from "react";

import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ item }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/product/${item._id}`}>
        <Card.Img variant="top" src={item.image} />
      </a>
      <Card.Body>
        <a href={`/product/${item._id}`}>
          <Card.Title as="div">{item.name}</Card.Title>
        </a>
        {/* <Card.Text as="div">
          <div className="my-3">
            {item.rating} from {item.numReviews} reviews
          </div>
        </Card.Text> */}

        <Rating color="tomato" value={item.rating} text={`${item.numReviews} reviews`}/>

        <Card.Text as="h3">
          ${item.price}
        </Card.Text>

        {/* <Card.Text>
                    {item.description}
                  </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Product;
