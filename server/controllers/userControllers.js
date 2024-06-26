const { isAuthorized } = require("../utils/auth-utils");
const User = require("../db/models/User");

exports.createUser = async (req, res) => {
  const {
    username,
    password,
    email,
    full_name,
    age,
    gender,
    location,
    profile_pic,
    expectation,
    hobbies,
    preferred_group_size,
    frequency_of_socialising,
    personality_type,
    gender_preference,
    ice_breaker_question,
    a_secret
  } = req.body;

  // TODO: check if username is taken, and if it is what should you return?
  const user = await User.create(
    username,
    password,
    email,
    full_name,
    age,
    gender,
    location,
    profile_pic,
    expectation,
    hobbies,
    preferred_group_size,
    frequency_of_socialising,
    personality_type,
    gender_preference,
    ice_breaker_question,
    a_secret
  );
  req.session.userId = user.id;

  res.send(user);
};

exports.listUsers = async (req, res) => {
  const users = await User.list();
  res.send(users);
};

exports.showUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  const updatedUser = await User.update(id, username);
  if (!updatedUser) return res.sendStatus(404);
  res.send(updatedUser);
};

// exports.updateUserAdditionalInfo = async (req, res) => {
//   const { age, gender, location, profile_pic } = req.body;
//   const { id } = req.params;

//   // Not only do users need to be logged in to update a user, they
//   // need to be authorized to perform this action for this particular
//   // user (users should only be able to change their own profiles)
//   if (!isAuthorized(id, req.session)) return res.sendStatus(403);

//   const updatedUser = await User.updateUserAdditionalInfo(age, gender, location, profile_pic );
//   if (!updatedUser) return res.sendStatus(404);
//   res.send(updatedUser);
// };

exports.updateUserAdditionalInfo = async (req, res) => {
  const { age, gender, location,expectation, hobbies,preferred_group_size,frequency_of_socialising,personality_type, gender_preference, ice_breaker_question, a_secret  } = req.body;
  const { id } = req.params;
  // Authorization check
  if (!isAuthorized(id, req.session)) {
    return res.sendStatus(403);
  }

  try {
    // Update user additional information
    const updatedUser = await User.updateAdditionalInformation(
      id,
      age,
      gender,
      location,
      JSON.stringify(expectation),
      JSON.stringify(hobbies),
      preferred_group_size,
      frequency_of_socialising,
      personality_type,
      gender_preference,
      ice_breaker_question,
      a_secret
    );
    if (!updatedUser) {
      return res.sendStatus(404);
    }
    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
