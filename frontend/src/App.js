import React from "react";
import Detailedhistory from './components/Detailedhistory'

function App() {
  // const [product, setProduct] = useState({
  //   name: "Stuff",
  //   price: 10,
  //   productBy: "Me",
  // });

  // const makePayment = (token) => {
  //   const body = {
  //     token,
  //     product,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   return fetch(`http://localhost:8000/payment`, {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => {
  //       console.log("RESPONSE", response);
  //       const { status } = response;
  //       console.log("STATUS", status);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="App">
      <Detailedhistory order_number="2"/>
      {/* <StripeCheckout
        stripeKey="pk_test_51HeqVKGJa4J23nKD0reDb8sbU2UVlmX1bqJKIaM7pYiGz5jQNHRvrO9V86EyWagLTJMD4XQpLxyEzDUYQJB4SsVH00DJei5VIo"
        token={makePayment}
        name="Stuff"
      >
        <button className="btn-large red">
          Buy my {product.name} for only ${product.price}!
        </button>
      </StripeCheckout> */}
    </div>
  );
}

export default App;
