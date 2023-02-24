const mongoose = require("mongoose");

const GrowBoxStatusSchema = new mongoose.Schema(
  {
    grow_box_name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    grow_box_type: {
      type: String,
      default: "generic",
    },
    number_of_plants: {
      type: Number,
      default: null,
    },
    number_of_compartments: {
      type: Number,
      default: null,
    },
    plant_ids: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
    grow_box_status: {
      type: String,
      default: "vegetative",
    },
    lighting_type: {
      type: String,
      default: "generic",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    flagged_for_deletion: {
      type: Boolean,
      default: false,
    },
    agent_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    organization_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GrowBox", GrowBoxStatusSchema, "GrowBox");
