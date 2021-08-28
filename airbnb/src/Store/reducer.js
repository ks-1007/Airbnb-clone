import { TOGGLE_LIKE } from "./actionType";

const initState = {
  hotelData: [],
};

export const reducerfunc = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LIKE: {
      const newImage = state.image.map((img) =>
        img.id === payload ? { ...img, liked: !img.liked } : img
      );
      return {
        ...state,
        image: newImage,
      };
    }
    default:
      return state;
  }
};
