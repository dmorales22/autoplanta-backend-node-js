const mongoose = require("mongoose");

/**
 *
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamps: boolean}, {phone: {unique: boolean, type: StringConstructor, required: boolean}, last_name: StringConstructor, first_name: StringConstructor, email: {sparse: boolean, unique: boolean, type: StringConstructor}}>}
 */
const MultimediaSchema = new mongoose.Schema(
  {
    media_name: {
      type: String,
      default: "",
    },
    media_type: {
      type: String,
      default: "unspecified",
    },
    media_format: {
      type: String,
      default: "unknown",
    },
    media_url: {
      type: String,
      default: "",
    },
    media_data: {
      type: mongoose.Types.Mixed,
      default: null,
    },
    media_size: {
      type: Number,
      default: null, //Stored in bytes
    },
    description: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: "",
    },
    api: {
      type: mongoose.Types.Mixed,
      default: null,
    },
    metadata: {
      type: mongoose.Types.Mixed,
      default: null,
    },
    is_locally_stored: {
      type: Boolean,
      default: true,
    },
    secure_mode: {
      type: Boolean,
      default: false,
    },
    owner_agent_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    shared_agent_ids: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Multimedia", MultimediaSchema, "Multimedia");
