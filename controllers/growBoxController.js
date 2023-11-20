const GrowBox = require("../models/GrowBox");
const mongoose = require("mongoose");
const { checkGrowBoxPermissions } = require("../utilities/permissionsChecker");

/**
 * This function creates a new GrowBox document.
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @author David Morales
 */
exports.createGrowBox = async (req, res) => {
  if (!req.session.agent_id) {
    return res.status(400).send({
      result: false,
      msg: "There's something wrong with this request.",
    });
  }

  try {
    const newGrowBox = await GrowBox.create({
      grow_box_name: req.body.grow_box_name,
      grow_box_status: req.body.grow_box_status,
      description: req.body.description,
      tags: req.body.tags,
      qr_code: "", //todo add qr code generation
      grow_box_type: req.body.grow_box_name,
      number_of_compartments: req.body.number_of_compartments,
      grow_box_cycle_status: req.body.grow_box_cycle_status,
      lighting_type: req.body.lighting_type,
      owner_agent_id: req.session.agent_id,
      share_with_agents: req.body.share_with_agents,
      share_with_organization: req.body.share_with_organization,
      organization_id: req.session.organization_id,
      secure_mode: req.body.secure_mode,
    });

    newGrowBox.save();
    return res.send({
      result: true,
      msg: "New grow box has been successfully created.",
      data: newGrowBox,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ result: false, msg: "There was a server error." });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @author David Morales
 */
exports.getGrowBoxById = async (req, res) => {
  if (
    !req.body.grow_box_id ||
    !mongoose.isObjectIdOrHexString(req.body.grow_box_id)
  ) {
    return res.status(400).send({
      result: false,
      msg: "Error. Something is wrong with this request.",
    });
  }

  try {
    const grow_box_id = new mongoose.Types.ObjectId(req.body.grow_box_id);
    const agent_id = req.session.agent_id;
    const organization_id = new req.session.organization_id;
    const grow_box = await GrowBox.findOne({ _id: grow_box_id });

    return res.send(grow_box);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ result: false, msg: "There was a server error." });
  }
};


/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.updateContact = async (req, res) => {
  if (
    !req.body.contact_id ||
    !mongoose.isObjectIdOrHexString(req.body.contact_id)
  ) {
    return res.status(400).send({
      result: false,
      msg: "Error. Something is wrong with this request.",
    });
  }

  try {
    const contact_id = mongoose.Types.ObjectId(req.body.contact_id);
    Contact.findOne(
      {
        _id: contact_id,
      },
      (err, contact) => {
        if (err) return res.send(err);
        return res.send(contact);
      }
    );
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ result: false, msg: "There was a server error." });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @author David Morales
 */
exports.removeContact = async (req, res) => {
  if (
    !req.body.contact_id ||
    !mongoose.isObjectIdOrHexString(req.body.contact_id)
  ) {
    return res.status(400).send({
      result: false,
      msg: "Error. Something is wrong with this request.",
    });
  }

  try {
    Contact.findByIdAndDelete(req.body.contact_id, (err, contact) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send({ result: false, msg: "There was a server." });
      }
      return res.send({
        result: true,
        msg: "Contact was successfully delete.",
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ result: false, msg: "There was a server." });
  }
};
