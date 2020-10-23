const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
// const stripeSK = process.env.STRIPE_SECRET_KEY;
// const stripe = require("stripe")(stripeSK);
// router.post("/payment/:user_id/:inventory_id", (req, res) => {
//   const { product, token } = req.body;
//   console.log("PRODUCT", product);
//   console.log("PRODUCT", product.price);
//   const idempontencyKey = uuid();
//   db.users
//     .findAll({
//       where: {
//         id: req.params.user_id,
//       },
//     })
//     .then((user_id) => {
//       db.inventory
//         .findAll({
//           where: {
//             id: req.params.invnetory_id,
//           },
//         })
//         .then((inventory_id) => {
//           let userID = user_id;
//           let inventoryID = inventory_id;
//           stripe.customers
//             .create({
//               email: token.email,
//               source: token.id,
//             })
//             .then((customer) => {
//               stripe.charges.create(
//                 {
//                   amount: product.price * 100,
//                   currency: "usd",
//                   customer: customer.userID,
//                   receipt_email: token.email,
//                   description: product.name,
//                   shipping: {
//                     name: token.card.name,
//                     address: {
//                       country: token.card.address_country,
//                     },
//                   },
//                 },
//                 { idempontencyKey }
//               );
//             })
//         .then((result) => res.status(200).json(result))
//         .catch((err) => console.log(err));
//     });
// });
// });
//   stripe.customers
//     .create({
//       email: token.email,
//       source: token.id,
//     })
//     .then((customer) => {
//       stripe.charges.create(
//         {
//           amount: product.price * 100,
//           currency: "usd",
//           customer: userID
//           receipt_email: token.email,
//           description: product.name,
//           shipping: {
//             name: token.card.name,
//             address: {
//               country: token.card.address_country,
//             },
//           },
//         },
//         { idempontencyKey }
//       );
//     })
//     .then((info) => {
//       db.order_history.create({});
//     })
//     .then((result) => res.status(200).json(result))
//     .catch((err) => console.log(err));
// });
////////////////////// Inventory
//Show all inventory
router.get("/inventory", (req, res) => {
  db.inventory.findAll().then((inventory) => res.send(inventory));
});
//Get product by id
router.get("/inventory/:id", (req, res) => {
  db.inventory
    .findAll({
      where: {
        id: req.params.id,
      },
    })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});
//Delete product by id
router.delete("/inventory/:id", (req, res) => {
  db.inventory
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.send("success"));
});
//Edit product by id
router.put("/inventory/:id", (req, res) => {
  db.inventory
    .update(
      {
        product_name: req.body.product_name,
        description: req.body.description,
        photo: req.body.photo,
        price: req.body.price,
        quantity: req.body.quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});
//Add new product to inventory
router.post("/inventory/add_product", (req, res) => {
  db.inventory
    .create({
      product_name: req.body.product_name,
      description: req.body.description,
      photo: req.body.photo,
      price: req.body.price,
      quantity: req.body.quantity,
    })
    .then((addedProduct) => res.send(addedProduct));
});
////////////////////// Order History

//Create order history
router.post("/order-history", (req, res) => {
  
    db.order_history
      .create({
        user_id: req.body.user_id,
        inventory_id: req.body.inventory_id,
        date_ordered: req.body.date_ordered,
        order_number: req.body.order_number,
        quantity: req.body.quantity,
        price: req.body.price
      })
      .then((results) => {
        res.send(results);
      })
      .catch((e) => {
        console.log(e);
        res.status(409).send("not working");
      });
});

//Show order history for specific user
router.get("/order-history", (req, res) => {
  db.order_history
    .findAll({
      where: {
        user_id: req.body.user_id,
      }
    })
    .then((orderHistory) => res.send(orderHistory))
    .catch((err) => console.log(err));
});


//Show order history for specific order
router.get("/order-history/:id", (req, res) => {
  db.order_history
    .findAll({
      where: {
        id: req.params.id,
      },
    })
    .then((order) => res.send(order))
    .catch((err) => console.log(err));
});
////////////////////// Users
//Create a user
router.post("/createuser", (req, res) => {
    if (!req.body.first_name) {
      res.status(404).send("Name is required");
    }
    if (!req.body.last_name) {
      res.status(404).send("Name is required");
    }
    if (!req.body.email) {
      res.status(404).send("Email is required");
    }
    if (!req.body.password) {
      res.status(404).send("Password is required");
    }
    if (!req.body.age) {
      res.status(404).send("Password is required");
    }
    if (!req.body.gender) {
      res.status(404).send("Password is required");
    }
    let first_name = req.body.first_name;
    console.log(first_name);
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let age = req.body.age;
    let gender = req.body.gender;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      let encrypted_password = hash;
      db.users
        .create({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: encrypted_password,
          age: age,
          gender: gender,
        })
        .then((results) => {
          res.json(results);
          userLoggedIn = true;
          req.session.user = results;
        })
        .catch((e) => {
          console.log(e);
          res.status(409).send("Username or email already taken.");
        });
    });
  });
  
module.exports = router;