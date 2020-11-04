import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(props.rating);
  const [count, setCount] = React.useState(props.rating_count);

  function handleRating(newValue) {
    axios
      .put(
        `https://e-commerce-project-2020.herokuapp.com/inventory/${props.id}`,
        {
          rating_count: parseInt(props.rating_count) + 1,
          rating:
            (props.rating * props.rating_count + newValue) /
            (parseInt(props.rating_count) + 1),
        }
      )
      .catch((error) => {
        console.log("error");
      });
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>

        <Row className="justify-content-center">
          <Rating
            name={props.product_name}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setCount(parseInt(props.rating_count) + 1);
              handleRating(newValue);
            }}
          />
          <p>({count})</p>
        </Row>
      </Box>
    </div>
  );
}
