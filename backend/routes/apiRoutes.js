const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");

// For bcrypt
const saltRounds = 10;
const bcrypt = require("bcrypt");
let userLoggedIn = false;

function authenticationMiddleware(req, res, next) {
  if (userLoggedIn) {
    console.log("User logged in.");
    next();
  } else {
    console.log("User not authenticated");
    res.redirect("/login");
  }
}

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
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
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
        rating: req.body.rating,
        rating_count: req.body.rating_count,
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
    .then((addedProduct) => res.send(addedProduct))
    .catch((err) => console.log(err));
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
      price: req.body.price,
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
      },
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

//Login to an account

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  db.users
    .findAll({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (!req.body.email) {
        res.status(404).send("Email is required");
      }
      if (!req.body.password) {
        res.status(404).send("Password is required");
      }
      let storedPassword = user[0].password;

      bcrypt.compare(password, storedPassword, function (err, result) {
        if (result) {
          res.json(user);
          //req.session.user = res;
          userLoggedIn = true;
        } else {
          res.status(409).send("Incorrect password");
        }
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send("Email/Password combination did not match");
    });
});

module.exports = router;
