import {
  GET_HOTEL_LIST,
  GET_ROOM,
  LOGIN_SUCCESS,
  SET_CHECKIN,
  SET_CHECKOUT,
  SET_GUESTS,
} from "./actionType"

const initState = {
  hotelList: [],
  room: {},
  checkIn: new Date(),
  checkOut: new Date(),
  guests: { adults: 1, children: 0, infants: 0 },
  token: loadData("token") || "",
  isAuth: false,
}

function saveData(key, data = "") {
  localStorage.setItem(key, JSON.stringify(data))
}
function loadData(key) {
  try {
    let data = localStorage.getItem(key)
    data = JSON.parse(data)
    return data
  } catch (err) {
    return undefined
  }
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
        checkOut: payload,
      }
    case SET_GUESTS:
      return {
        ...state,
        guests: payload,
      }
    case LOGIN_SUCCESS:
      saveData("token", payload)
      return {
        ...state,
        token: payload,
        isAuth: true,
      }
    default:
      return state
  }
}
