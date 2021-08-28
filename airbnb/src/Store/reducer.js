import {
  GET_HOTEL_LIST,
  GET_ROOM,
  SET_CHECKIN,
  SET_CHECKOUT,
  SET_GUESTS,
} from "./actionType"

const initState = {
  hotelList: [],
  room: {},
  checkIn: "",
  checkOut: "",
  guests: {},
}

export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_HOTEL_LIST:
      return {
        ...state,
        hotelList: payload,
      }
    case GET_ROOM:
      return {
        ...state,
        room: payload,
      }
    case SET_CHECKIN:
      return {
        ...state,
        checkIn: payload,
      }

    case SET_CHECKOUT:
      return {
        ...state,
        checkIn: payload,
      }
    case SET_GUESTS:
      return {
        ...state,
        guests: payload,
      }
    default:
      return state
  }
}
