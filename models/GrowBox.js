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
    qr_code: {
      type: String,
      default: "",
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
    owner_agent_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    agent_ids: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
    share_with_agents: {
      type: Boolean,
      default: false,
    },
    share_with_organization: {
      type: Boolean,
      default: false,
    },
    organization_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    secure_mode: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GrowBox", GrowBoxStatusSchema, "GrowBox");
