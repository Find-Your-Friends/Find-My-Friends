// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password, email, age, fullName, gender, location,  profile_image,})=> (
  fetchHandler(baseUrl, getPostOptions({ username, password, email, age, fullName, gender, location,  profile_image,}))
);

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);

// export const updateUserInfo = async ({
//   id,
//   username,
//   fullName,
//   email,
//   password,
//   location,
//   gender,
//   age,
//   profile_image
// }) =>
//   fetchHandler(
//     `${baseUrl}/${id}`,
//     getPatchOptions({
//       username,
//       fullName,
//       email,
//       password,
//       location,
//       gender,
//       age,
//       profile_image
//     })
//   );

// export const updatePassword= async ({ id, username, password }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username, password }))
// );
