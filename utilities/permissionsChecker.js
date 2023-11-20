/**
 *
 * @param {string} agent_id
 * @param {string} organization_id
 * @param {Object} grow_box
 * @returns {boolean}
 */
function checkGrowBoxPermissions(agent_id, organization_id, grow_box) {
  if (agent_id === grow_box.owner_agent_id.toString()) {
    return true;
  }

  if (grow_box.share_with_organization) {
    if (grow_box.organization_id.toString() === organization_id) {
      return true;
    }
  }

  if (grow_box.share_with_agents) {
    for (let i = 0; i < grow_box.agent_ids.length; i++) {
      if (grow_box.agent_ids[i].toString() === agent_id) {
        return true;
      }
    }
  }

  return false;
}

export { checkGrowBoxPermissions };
