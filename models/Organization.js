const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema(
  {
    organization_name: {
      type: String,
      default: "",
    },
    organization_type: {
      type: String,
      default: "generic",
    },
    code: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    qr_code: {
      type: String,
      default: "",
    },
    organization_status: {
      type: String,
      default: "active",
    },
    flagged_for_deletion: {
      type: Boolean,
      default: false,
    },
    owner_agent_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    secure_mode: {
      type: Boolean,
      default: false,
    },
    api: {
      type: mongoose.Types.Mixed,
      default: null,
    },
    additional_data: {
      type: mongoose.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Organization",
  OrganizationSchema,
  "Organization"
);
