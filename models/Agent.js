const mongoose = require("mongoose");

/**
 *
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamps: boolean}, {password: StringConstructor, last_name: StringConstructor, first_name: StringConstructor, email: {unique: boolean, type: StringConstructor}, token: StringConstructor}>}
 */
const AgentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    first_name: {
      type: String,
      default: "",
    },
    middle_name: {
      type: String,
      default: "",
    },
    password: String,
    token: String,
    last_name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    is_hidden: {
      type: Boolean,
      default: false,
    },
    secure_mode: {
      type: Boolean,
      default: false,
    },
    secret_key: {
      type: String,
      default: "",
    },
    organization_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", AgentSchema, "Agent");
