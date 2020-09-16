const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const basicAuth = require("express-basic-auth");

//injecting dependencies
module.exports = (server) => {
  //apply cross origin support
  server.use(cors());

  //apply http headers
  server.use(helmet());

  server.use(
    basicAuth({
      users: {
        admin: "supersecret",
      },
      challenge: true,
    })
  );

  //parsing the body as JSON
  server.use(express.json());
};
