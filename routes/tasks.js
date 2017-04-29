"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    console.log("GET is hit");
    knex
    .select("*")
      .from("dummydata")
      .then((results) => {
        console.log("Result", results);
        res.json(results);
    });
  });

  router.post("/", (req, res) => {
    console.log("post is hit");
    console.log("Input recieved is", req.body.name);
   knex('dummydata').insert({ name: req.body.name ,categories_id:1})
   .then(() =>  { res.status(201).send(); });


  });

  router.put("/", (req, res) => {
    knex
  });

  router.delete("/:id", (req, res) => {
    console.log("ID is ", req.params.id);
    knex('dummydata').where('id',req.params.id).del()
      .then(() => {res.status(200).json({ok: true}); });
  });

  return router;
}
