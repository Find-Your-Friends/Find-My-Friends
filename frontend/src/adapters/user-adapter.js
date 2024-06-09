// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/users";

export const createUser = async ({
  username,
  password,
  email,
  age,
  full_name
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
      username,
      password,
      email,
      age,
      full_name
    })
  );

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));

export const updateAdditionalInformation = async ({
  id,
  location,
  age,
  gender,
  profile_pic,
  expectation,
  hobbies,
  preferred_group_size,
  frequency_of_socialising,
  personality_type,
  gender_preference,
  ice_breaker_question,
}) =>
  fetchHandler(
    `${baseUrl}/${id}`,
    getPatchOptions({
      location,
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
    })
  );

// export const updatePassword= async ({ id, username, password }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username, password }))
// );
