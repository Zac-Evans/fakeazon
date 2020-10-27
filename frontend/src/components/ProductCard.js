import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

class ProductCard extends Component {
  render() {
    return (
      <Col lg="3" md="4" sm="5" xs="12">
        <Fade triggerOnce>
          <Card className="productCard m-2">
            {/* <Card.Header as="h5"></Card.Header> */}
            <Card.Img
              // style={{ maxHeight: "300px" }}
              key={this.props.id}
              variant="top"
              src={this.props.photo}
              className="productImage"
            />
            <Card.Body className="text-center">
              <Card.Title>{this.props.product_name}</Card.Title>

              <Card.Text>{this.props.description}</Card.Text>
              <div>${this.props.price}</div>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value="3"
                  // onChange={(event, newValue) => {
                  // setValue(newValue);
                  // }}
                />
              </Box>
              <AddToCartButton />
            </Card.Body>
          </Card>
        </Fade>
      </Col>
    );
  }
}

export default ProductCard;
