const { isAuthorized } = require("../utils/auth-utils");
const AdditionalInfo = require("../db/models/AdditionalInfo"); // Ensure correct path and naming

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

  const { userId } = req.session;

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
