import { UsersCollection } from '../bd/models/user.js';

export const registerUser = async (payload) => {
  return await UsersCollection.create(payload);
};
