const { isAuthorized } = require("../utils/auth-utils");
const AdditionalInfo = require("../db/models/Additional_info"); // Ensure correct path and naming

exports.addAdditionalInfo = async (req, res) => {
  const {
    wants,
    interests,
    hobbies,
    preferred_group_size,
    types_of_events,
    frequency_of_socialising,
    personality_type,
    gender_preference,
    personality_traits,
    values,
    beliefs,
  } = req.body;
console.log(req.body)
  const { userId } = req.session;
console.log(userId)
  // Ensure the user is authorized
  if (!isAuthorized(userId, req.session)) {
    return res.sendStatus(403);
  }

  try {
    const additionalInfo = await AdditionalInfo.create({
      user_id: userId,
      wants,
      interests,
      hobbies,
      preferred_group_size,
      types_of_events,
      frequency_of_socialising,
      personality_type,
      gender_preference,
      personality_traits,
      values,
      beliefs,
    });

    res.status(201).send(additionalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
};
exports.listAdditionalInfo = async (req, res) => {
  const additional = await AdditionalInfo.list();
  res.send(additional);
};

exports.showAdditional = async (req, res) => {
  const { id } = req.params;
  const additional = await AdditionalInfo(id);
  res.send(additional);
};
