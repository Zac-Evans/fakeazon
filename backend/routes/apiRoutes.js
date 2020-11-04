const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

console.log(db.inventory)

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
        product_name: req.params.id,
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
        product_name: req.params.id,
      },
    })
    .then(() => res.send("success"))

    .catch(() => res.send("fail"));
});

//Edit product by id
router.put("/inventory/:id", (req, res) => {
  db.inventory
    .update(
      {
        product_name: req.body.product_name,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
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
    .then((results) => {
      res.json(results);
    })
    .catch((err) => res.send(err));
});

//Add new product to inventory
router.post("/inventory/add_product", (req, res) => {
  db.inventory
    .create({
      product_name: req.body.product_name,
      shortDescription: req.body.shortDescription,
      longDescription: req.body.longDescription,
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

db.inventory.hasMany(db.order_history, {
  foreignKey: {
    name: 'inventory_id'
  }
}),

db.order_history.belongsTo(db.inventory, {
  foreignKey: {
    name: 'inventory_id'
  }
}),

router.get("/order-history/user=:id", (req, res) => {
  db.order_history
  .findAll({
    where: {user_id: req.params.id},
    include: [{
      model: db.inventory,
      // required: true
     }]
  }).then(order => res.send(order))
    .catch((err) => console.log(err));
});

router.get("/order-history/order=:id", (req, res) => {
  db.order_history
  .findAll({
    where: {order_number: req.params.id},
    include: [{
      model: db.inventory,
      // required: true
     }]
  }).then(order => res.send(order))
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
        db.shopping_cart.create({
          user_id: results.id,
        });
      })
      .catch((e) => {
        console.log(e);
        res.status(409).send("Username or email already taken.");
      });
  });
});

//Update user

router.put("/user/:id", (req, res) => {
  db.users
    .update(
      {
        shipping_address_1: req.body.shippingAddress,
        shipping_address_2: req.body.shippingAddress2,
        shipping_city: req.body.city,
        shipping_state: req.body.state,
        shipping_zip: req.body.zip,
        card_number: req.body.cardNumber,
        card_expiration_date: req.body.exipration,
        card_security_code: req.body.securityCode,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((user) => res.json(user))
    .catch((err) => alert(err));
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
          req.session.user = res;
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

//Create user cart
router.post("/create-cart", (req, res) => {
  db.shopping_cart
    .create({
      user_id: req.body.user_id,
    })
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
});

//Get cart
router.get("/get-cart/:id", (req, res) => {
  db.shopping_cart
    .findAll({
      where: {
        user_id: req.params.id,
      },
    })
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
});

//Get cart items not logged in
router.post("/show-cart/logged-out", (req, res) => {
  db.inventory
    .findAll({
      where: {
        id: {
          [Op.or]: req.body.products,
        },
      },
    })

    .then((results) => res.send(results))

    .catch((err) => console.log(err));
});

//Get cart and show item in cart
router.get("/show-cart/:id", (req, res) => {
  db.shopping_cart
    .findAll({
      raw: true,
      where: {
        user_id: req.params.id,
      },
    })
    .then((cart) => {
      db.cart_items
        .findAll({
          raw: true,
          where: {
            shopping_cart_id: cart[0].id,
          },
        })
        .then((products) => {
          let productArray = products.map((product) => product.product_id);
          db.inventory
            .findAll({
              where: {
                id: {
                  [Op.or]: productArray,
                },
              },
            })

            .then((results) => res.send(results))

            .catch((err) => console.log(err));
        });
    });
});

//Get number of items in cart
router.get("/count-cart/:id", (req, res) => {
  db.shopping_cart
    .findAll({
      raw: true,
      where: {
        user_id: req.params.id,
      },
    })
    .then((cart) => {
      db.cart_items
        .findAll({
          raw: true,
          where: {
            shopping_cart_id: cart[0].id,
          },
        })

        .then((results) => res.send(results));
    })
    .catch((err) => console.log(err));
});

//Add to cart
router.post("/add-to-cart", (req, res) => {
  db.cart_items
    .create({
      product_id: req.body.product_id,
      // quantity: req.body.quantity,
      shopping_cart_id: req.body.shopping_cart_id,
    })
    .then(() => res.send("Added to cart."))
    .catch((err) => console.log(err));
});

module.exports = router;
