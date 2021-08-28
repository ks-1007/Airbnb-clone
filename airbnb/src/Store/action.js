import { TOGGLE_LIKE } from "./actionType";

export const toggleLike = (payload) => {
  return { type: TOGGLE_LIKE, payload };
};
