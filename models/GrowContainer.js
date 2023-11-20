const mongoose = require("mongoose");

const GrowContainerSchema = new mongoose.Schema(
  {
    container_type: {
      type: String,
      default: "unspecified",
    },
    container_medium: {
      type: String,
      default: "unspecified",
    },
    container_volume: {
      type: Number,
      default: null,
    },
    additional_data: {
      type: mongoose.Types.Mixed,
      default: null,
    },
    api: {
      type: mongoose.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "GrowContainer",
  GrowContainerSchema,
  "GrowContainer"
);
