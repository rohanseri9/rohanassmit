const mongoose = require("mongoose");
const { Schema } = mongoose;

let adminSchema = Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    collection: "admin",
  }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
