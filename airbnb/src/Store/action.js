import axios from "axios"
import {
  GET_HOTEL_LIST,
  GET_ROOM,
  LOGIN_SUCCESS,
  SET_CHECKIN,
  SET_CHECKOUT,
  SET_GUESTS,
} from "./actionType"

export const getRoom = (payload) => {
  return {
    type: GET_ROOM,
    payload,
  }
}
export const getHotelList = (payload) => {
  return {
    type: GET_HOTEL_LIST,
    payload,
  }
}
export const setCheckIn = (payload) => {
  return {
    type: SET_CHECKIN,
    payload,
  }
}
export const setCheckOut = (payload) => {
  return {
    type: SET_CHECKOUT,
    payload,
  }
}
export const setGuest = (payload) => {
  return {
    type: SET_GUESTS,
    payload,
  }
}
export const setToken = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  }
}

export const actionGetHotelList = () => (dispatch) => {
  axios
    .get("http://localhost:3050/data")
    .then(({ data }) => {
      dispatch(getHotelList(data))
    })
    .catch((err) => {
      console.log("err:", err)
    })
}

export const actionGetRoom = (id) => (dispatch) => {
  axios.get(`http://localhost:3050/data/${id}`).then(({ data }) => {
    dispatch(getRoom(data))
  })
}
