const mongoose = require("mongoose");

const GrowBoxStatusSchema = new mongoose.Schema(
  {
    temperature: {
      type: Number,
      default: null,
    },
    temperature_type: {
      type: String,
      default: "F",
    },
    humidity: {
      type: Number,
      default: null,
    },
    is_light_on: {
      type: Boolean,
      default: false,
    },
    is_alert: {
      type: Boolean,
      default: false,
    },
    flagged_for_deletion: {
      type: Boolean,
      default: false,
    },
    grow_box_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    grow_cycle_id: {
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

module.exports = mongoose.model(
  "GrowBoxStatus",
  GrowBoxStatusSchema,
  "GrowBoxStatus"
);
