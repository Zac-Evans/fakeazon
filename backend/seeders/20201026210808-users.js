"use strict";
var faker = require("faker");

const fakeUsers = [...Array(2)].map((user) => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  age: Math.floor(Math.random() * 100),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", fakeUsers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
