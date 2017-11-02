const db = require("../models")

let create = (req,res) => {
  console.log(req.body);
  res.send("success!");
}

module.exports = {
  create
}
