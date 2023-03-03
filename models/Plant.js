const mongoose = require("mongoose");

/**
 *
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamps: boolean}, {phone: {unique: boolean, type: StringConstructor, required: boolean}, last_name: StringConstructor, first_name: StringConstructor, email: {sparse: boolean, unique: boolean, type: StringConstructor}}>}
 */
const PlantSchema = new mongoose.Schema(
  {
    plant_name: {
      type: String,
      default: "",
    },
    plant_type: {
      type: String,
      default: "generic",
    },
    plant_strain: {
      type: String,
      default: "generic",
    },
    qr_code: {
      type: String,
      default: "",
    },
    pot_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    grow_cycle_id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    grow_box_id: {
      type: mongoose.Types.ObjectId,
      default: null,
      ref: "GrowBox",
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

module.exports = mongoose.model("Plant", PlantSchema, "Plant");
