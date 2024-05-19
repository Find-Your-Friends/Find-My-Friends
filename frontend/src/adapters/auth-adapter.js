import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api';

export const checkForLoggedInUser = async () => {
  const [data] = await fetchHandler(`${baseUrl}/me`);
  return data;
};

export const logUserIn = async ({ username, password }) => (
  fetchHandler(`${baseUrl}/login`, getPostOptions({ username, password }))
);

// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logUserOut = async () => {
  await fetchHandler(`${baseUrl}/logout`, deleteOptions);
  return true;
};

//add a terminate feature
export const deleteUser = async () => {
  await fetchHandler(`${baseUrl}/users/delete`, deleteOptions);
  return true;
};