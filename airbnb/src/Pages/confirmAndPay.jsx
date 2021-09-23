import { ConfirmAndPayNavbar } from "../Components/confirmAndPayComp/confirmAndPayNavbar"
import { NavLink, Redirect, useParams } from "react-router-dom"
import SlidingSwitch from "../Components/confirmAndPayComp/confirmAndPayButton"
import styles from "./Css/confirmAndPay.module.css"
import React, { useState } from "react"
import { StickyBox } from "../Components/confirmAndPayComp/stickydiv"
import { ConfirmAndPayFooter } from "../Components/confirmAndPayComp/confirmAndPayfooter"
import { useDispatch, useSelector } from "react-redux"
import TransitionModal from "../Components/confirmAndPayComp/modal"
import { useEffect } from "react"
import axios from "axios"
import { DaysCalculator } from "../Components/confirmAndPayComp/daysCalculator"
import { useMemo } from "react"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRange } from "react-date-range"
import { addDays } from "date-fns"
import { setCheckIn, setCheckOut } from "../Store/action"
import { GuestInput } from "../Components/RoomDetails/GuestsInput"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import Loading from "../Components/RoomDetails/Loading"
export const ConfirmAndPay = () => {
  const { guests, checkIn, checkOut } = useSelector((state) => ({
    guests: state.guests,
    checkIn: state.checkIn,
    checkOut: state.checkOut,
  }))

  const dispatch = useDispatch()

  /*loading function */

  const [loading, setLoading] = useState(true)

  /*loading function */
  const { hotelId } = useParams()
  const [days, setDays] = useState(0)

  const totalGuests = guests.adults + guests.children + guests.infants

  /*dates */
  const checkInMonth = (checkIn + "").slice(4, 7)
  const checkInDay = (checkIn + "").slice(8, 10)
  const checkOutMonth = (checkOut + "").slice(4, 7)
  const checkOutDay = (checkOut + "").slice(8, 10)

  /*dates */

  useMemo(() => {
    const Difference_In_Days = DaysCalculator({ checkIn, checkOut })
    setDays(Difference_In_Days)
  }, [checkIn, checkOut])

  const [paymentCard, setPaymentCard] = useState(false)
  const [guest, setGuest] = useState(false)
  const [dates, setDates] = useState(false)
  const [room, setRoom] = useState(false)
  const [note, setNote] = useState("Add a note for expensing purposes.")
  const [noteModal, setNoteModal] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [confirmGo, setConfirmGo] = useState(false)
  /*calendar functions */

  const [calendarDate, setCalendarDate] = useState([
    {
      startDate: checkIn,
      endDate: checkOut,
      key: "selection",
    },
  ])

  const handleDateDispatch = () => {
    setLoading(true)
    dispatch(setCheckIn(calendarDate[0].startDate))
    dispatch(setCheckOut(calendarDate[0].endDate))
    setLoading(false)
  }
  /*calendar functions */

  /*confirmpayment function */
  const handlePaymentModal = (e) => {
    setConfirm(true)
    let x = setTimeout(() => {
      setConfirmGo(true)
      clearTimeout(x)
    }, [4000])
  }

  /*confirmpayment function */

  /*modal functions */
  const handleGuest = (e) => {
    setGuest(e)
  }

  const handleDates = (e) => {
    setDates(e)
  }

  const handleNoteModal = (e) => {
    if (note === "") {
      setNote("Add a note for expensing purposes.")
    }
    setNoteModal(e)
    if (e === true) {
      setNote("")
    }
  }

  /*modal functions */

  /*switch functions */

  const [state, setState] = useState({
    checkedB: false,
  })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  /*switch functions */

  const handlePaymentCard = () => {
    setPaymentCard(!paymentCard)
  }

  useEffect(() => {
    axios
      .get(`https://airbnb1007-clone-server.herokuapp.com/data/${hotelId}`)

      .then(({ data }) => {
        setRoom(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])

  if (loading) {
    // return <div style={{ textAlign: "center" }}>Loading...</div>
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    )
  }

  if (confirmGo) {
    return <Redirect to="/" />
  }
  return (
    <>
      <div className={styles.container}>
        <ConfirmAndPayNavbar />
        <div className={styles.main_container}>
          <div className={styles.Cnp_container}>
            <div className={styles.Cnp_box}>
              <div className={styles.Cnp_outerbox}>
                <div style={{ paddingBottom: "32px" }}>
                  <section>
                    <div className={styles.Cnp_innerbox}>
                      <div className={styles.Cnp_arrow}>
                        <NavLink className={styles.Cnp_link} to="#">
                          <span className={styles.svgbox}>
                            <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-label="Back"
                              role="img"
                              focusable="false"
                              className={styles.svg}
                            >
                              <g fill="none">
                                <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                              </g>
                            </svg>
                          </span>
                        </NavLink>
                      </div>
                      <div className={styles.tagLineContainer}>
                        <h1 className={styles.tagLine}>Confirm and pay</h1>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsBox}>
              <div className={styles.tripDetailsBox}>
                <div>
                  <div style={{ marginBottom: "100px" }}>
                    <div style={{ paddingBottom: "24px" }}>
                      <section>
                        <div className={styles.tripDetailsBoldName}>
                          <h2 className={styles.tagLine}>Your trip</h2>
                        </div>
                      </section>
                    </div>
                    <div style={{ paddingBottom: "24px" }}>
                      <div>
                        <div className={styles.tripDetailsBoldNamewithDetails}>
                          <div
                            className={
                              styles.tripDetailsBoldName_Details_TagLine
                            }
                          >
                            <div
                              className={
                                styles.tripDetailsBoldName_Details_TagLineDetails
                              }
                            >
                              <h3 className={styles.tagLine}>Dates</h3>
                            </div>
                            <div className={styles.TagDetails}>
                              {checkInDay} {checkInMonth} – {checkOutDay}{" "}
                              {checkOutMonth}
                            </div>
                          </div>
                          <button
                            onClick={() => handleDates(true)}
                            className={styles.button_underline}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div style={{ paddingBottom: "24px" }}>
                      <div>
                        <div className={styles.tripDetailsBoldNamewithDetails}>
                          <div
                            className={
                              styles.tripDetailsBoldName_Details_TagLine
                            }
                          >
                            <div
                              className={
                                styles.tripDetailsBoldName_Details_TagLineDetails
                              }
                            >
                              <h3 className={styles.tagLine}>Guests</h3>
                            </div>
                            <div className={styles.TagDetails}>
                              {totalGuests} guests
                            </div>
                          </div>
                          <button
                            onClick={() => handleGuest(true)}
                            className={styles.button_underline}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* div for switch, is this a work trip option*/}
                    <div>
                      <div className={styles.lineBreaker}></div>
                      <div>
                        <div
                          style={{ paddingBottom: "24px", paddingTop: "24px" }}
                        >
                          <div className={styles.workTrip}>
                            <div
                              className={
                                styles.tripDetailsBoldName_Details_TagLine
                              }
                            >
                              <div
                                className={
                                  styles.tripDetailsBoldName_Details_TagLineDetails
                                }
                              >
                                <h3 className={styles.tagLine}>
                                  Is this a work trip?
                                </h3>
                              </div>
                            </div>
                            <SlidingSwitch
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedB"
                            />
                          </div>
                        </div>
                        {state.checkedB ? (
                          <div
                            style={{ paddingBottom: "24px", paddingTop: "8px" }}
                          >
                            <div>
                              <div
                                className={
                                  styles.tripDetailsBoldNamewithDetails
                                }
                              >
                                <div
                                  className={
                                    styles.tripDetailsBoldName_Details_TagLine
                                  }
                                >
                                  <div
                                    className={
                                      styles.tripDetailsBoldName_Details_TagLineDetails
                                    }
                                  >
                                    <h3 className={styles.tagLine}>
                                      Trip purpose (optional)
                                    </h3>
                                  </div>
                                  <div
                                    style={{ marginTop: "4px" }}
                                    className={styles.TagDetails1}
                                  >
                                    {note}
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleNoteModal(true)}
                                  className={styles.NoteButton}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        <div className={styles.lineBreaker}></div>
                      </div>
                    </div>
                    {/* div for radio is this a work trip option*/}

                    {/* div for payment Option */}
                    <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                      <div>
                        <section>
                          <div>
                            <div>
                              <div className={styles.playwith}>
                                <label
                                  className={styles.payment_option_selector}
                                  htmlFor="payment_option_selector"
                                >
                                  <div
                                    className={
                                      styles.payment_option_selector_container
                                    }
                                  >
                                    <h2 className={styles.tagLine}>Pay with</h2>
                                  </div>
                                </label>
                                <div className={styles.paymentCards}>
                                  <span className={styles.paymentCard}>
                                    <span role="img" aria-label="Mastercard">
                                      <img
                                        src="https://a0.muscache.com/airbnb/static/packages/logo_mastercard.f18379cf.svg"
                                        alt="Mastercard"
                                        height="9"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </span>
                                  <span className={styles.paymentCard}>
                                    <span role="img" aria-label="Visa Card">
                                      <img
                                        src="https://a0.muscache.com/airbnb/static/packages/logo_visa.0adea522.svg"
                                        alt="Visa Card"
                                        height="9"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </span>
                                  <span>
                                    <span
                                      role="img"
                                      aria-label="American Express Card"
                                    >
                                      <img
                                        src="https://a0.muscache.com/airbnb/static/packages/logo_amex.84088b52.svg"
                                        alt="American Express Card"
                                        height="9"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div style={{ position: "relative" }}>
                                <button
                                  onClick={handlePaymentCard}
                                  className={styles.dropdownbtn}
                                >
                                  <div
                                    aria-disabled="false"
                                    id="dropdown-selector-payment_option_selector-input"
                                    tabIndex="-1"
                                    className={styles._1wcpnjd}
                                  >
                                    <div className={styles._hgs47m}>
                                      <div className={styles._ni9axhe}>
                                        <div>
                                          <div style={{ marginRight: "16px" }}>
                                            <div className={styles._18k2iy}>
                                              <svg
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                focusable="false"
                                                style={{
                                                  display: "block",
                                                  height: "33px",
                                                  width: "33px",
                                                  fill: "rgb(176, 176, 176)",
                                                }}
                                              >
                                                <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles._10ejfg4u}>
                                        <div>Credit or Debit Card</div>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <span className={styles._qcdbez}>
                                  <div className={styles._nncr1bm}>
                                    <div className={styles._ni9axhe}>
                                      <div
                                        className={styles._wn4bip}
                                        style={{
                                          transform: paymentCard
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)",
                                        }}
                                      >
                                        <svg
                                          viewBox="0 0 18 18"
                                          role="presentation"
                                          aria-hidden="true"
                                          focusable="false"
                                          style={{
                                            height: "16px",
                                            width: "16px",
                                            display: "block",
                                            fill: "rgb(72, 72, 72)",
                                          }}
                                        >
                                          <path
                                            d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                                            fillRule="evenodd"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div
                                onClick={handlePaymentCard}
                                style={{
                                  position: "relative",
                                  display: paymentCard ? "block" : "none",
                                }}
                              >
                                <ul className={styles._xxdpmjq}>
                                  <ul
                                    className={styles._1gyjybc}
                                    role="group"
                                    aria-label="Add payment method"
                                  >
                                    <li
                                      role="option"
                                      aria-selected="true"
                                      aria-disabled="false"
                                      id="dropdown-selector-payment_option_selector-option-ADYEN_PAYU"
                                      tabIndex="-1"
                                      className={styles._16kbejea}
                                    >
                                      <div className={styles._hgs47m}>
                                        <div className={styles._ni9axhe}>
                                          <div>
                                            <div
                                              style={{ marginRight: "16px" }}
                                            >
                                              <div className={styles._18k2iy}>
                                                <svg
                                                  viewBox="0 0 32 32"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  role="presentation"
                                                  focusable="false"
                                                  style={{
                                                    display: "block",
                                                    height: "33px",
                                                    width: "33px",
                                                    fill: "rgb(176, 176, 176)",
                                                  }}
                                                >
                                                  <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z"></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={styles._10ejfg4u}>
                                          <div>Credit or Debit Card</div>
                                        </div>
                                        <div className={styles._ni9axhe}>
                                          <span className={styles._1c5gin1}>
                                            <div className={styles._nncr1bm}>
                                              <div className={styles._ni9axhe}>
                                                <svg
                                                  viewBox="0 0 52 52"
                                                  fill="currentColor"
                                                  fillOpacity="0"
                                                  stroke="#484848"
                                                  strokeWidth="3"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  role="presentation"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  style={{
                                                    height: "48px",
                                                    width: "48px",
                                                    display: "block",
                                                    overflow: "visible",
                                                  }}
                                                >
                                                  <path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    {/* div for payment Option */}
                    {/* div for enter a coupon */}
                    <div>
                      <div>
                        <div style={{ paddingBottom: "24px" }}>
                          <div>
                            <div className={styles._czm8crp}>
                              <button className={styles.button_underline}>
                                Enter a coupon
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.lineBreaker}></div>
                    </div>
                    {/* div for enter a coupon */}
                    {/*div for cancellation policy */}
                    <div>
                      <div>
                        <div
                          style={{ paddingTop: "24px", paddingBottom: "16px" }}
                        >
                          <div style={{ fontSize: "16px", lineHeight: "20px" }}>
                            <section>
                              <div
                                style={{
                                  fontSize: "22px",
                                  lineHeight: "26px",
                                  fontWeight: "800",
                                }}
                              >
                                <h2 className={styles.tagLine}>
                                  Cancellation policy
                                </h2>
                              </div>
                            </section>
                            <div style={{ paddingTop: "24px" }}></div>
                            <strong>
                              Free cancellation before 12:00 PM on{" "}
                              {`${Number(checkInDay) - 1}`} {checkInMonth}.
                            </strong>
                            <span style={{ color: "rgb(113, 113, 113)" }}>
                              {" "}
                              <span className={styles.TagDetails}>
                                After that, cancel before 12:00 PM on{" "}
                                {checkInDay} {checkInMonth} and get a full
                                refund, minus the first night and service fee.
                              </span>{" "}
                            </span>
                            <button className={styles.button_underline}>
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*div for cancellation policy */}
                    {/*div for covid-19*/}
                    <div>
                      <div>
                        <div className={styles.covid}>
                          <div style={{ fontSize: "16px", lineHeight: "20px" }}>
                            <span style={{ color: "rgb(113, 113, 113)" }}>
                              {" "}
                              <span className={styles.TagDetails}>
                                Our Extenuating Circumstances policy does not
                                cover travel disruptions caused by COVID-19.
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*div for covid-19*/}
                    {/*div for button details of confirm and pay */}
                    <div>
                      <div>
                        <div style={{ marginTop: "24px" }}>
                          <div className={styles.lineBreaker}></div>
                          <div
                            style={{
                              paddingTop: "24px",
                              paddingBottom: "24px",
                              color: "rgb(113, 113, 113)",
                              fontFamily: "Circular std book",
                            }}
                          >
                            <div
                              style={{
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                lineHeight: "16px",
                                fontSize: "12px",
                                fontWeight: "400",
                              }}
                            >
                              By selecting the button below, I agree to the{" "}
                              <button className={styles.button_underline}>
                                Host's House Rules
                              </button>
                              , {""}
                              <button className={styles.button_underline}>
                                Airbnb's COVID-19 Safety Requirements
                              </button>{" "}
                              and the{" "}
                              <button className={styles.button_underline}>
                                {" "}
                                Guest Refund Policy
                              </button>
                              .
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*div for button details of confirm and pay */}
                    {/*div for button confirm and pay */}
                    <div>
                      <button
                        disabled={paymentCard ? true : false}
                        className={styles.button_confirm_and_pay}
                        onClick={() => handlePaymentModal(true)}
                      >
                        <span className={styles._163rr5i}>
                          <span className={styles.mouseaction}></span>
                        </span>
                        <span className={styles._tcp689}>
                          <span className={styles._14d5b3i}>
                            <span>Confirm and pay</span>
                          </span>{" "}
                        </span>
                      </button>
                    </div>
                    {/*div for button confirm and pay */}
                  </div>
                </div>
              </div>
              <div className={styles.priceDetailsBox}>
                <StickyBox props={{ room, days }} />
              </div>
            </div>
          </div>
        </div>
        <ConfirmAndPayFooter />
        <TransitionModal handleModal={handleGuest} open={guest}>
          <GuestInput handleModal={() => handleGuest(false)} people={guests} />
        </TransitionModal>
        <TransitionModal
          className={styles.anime}
          handleModal={handleDates}
          open={dates}
        >
          <div style={{ paddingTop: "15px" }}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setCalendarDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={calendarDate}
              months={2}
              direction="horizontal"
              minDate={checkIn}
            />
          </div>
          <div className={styles.daterange}>
            <button
              style={{
                color: "rgb(34, 34, 34)",
                background: "rgb(255, 255, 255)",
              }}
              className={styles.btn_close_save}
              onClick={() => handleDates(false)}
            >
              <span style={{ textDecoration: "underline", fontSize: "18px" }}>
                Close
              </span>
            </button>
            <button
              className={styles.btn_close_save}
              onClick={handleDateDispatch}
            >
              Save
            </button>
          </div>
        </TransitionModal>
        <TransitionModal handleModal={handleNoteModal} open={noteModal}>
          <h2>Notes</h2>
          <input
            style={{ width: "400px", height: "50px", fontSize: "24px" }}
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className={styles.daterange}>
            <button
              style={{
                marginLeft: "-10px",
                marginTop: "5px",
                color: "rgb(34, 34, 34)",
                background: "rgb(255, 255, 255)",
                justifyContent: "flex-end",
              }}
              className={styles.btn_close_save}
              onClick={() => handleNoteModal(false)}
            >
              <span style={{ textDecoration: "underline", fontSize: "18px" }}>
                Close
              </span>
            </button>
          </div>
        </TransitionModal>
        <TransitionModal handleModal={handlePaymentModal} open={confirm}>
          <div style={{ color: "rgb(255, 56, 92)", textAlign: "center" }}>
            <h2>Dear customer your Booking is Successfull for {days} nights</h2>
            <h1>Thankyou</h1>
            <EmojiEmotionsIcon style={{ fontSize: "50px", fill: "orange" }} />
          </div>
        </TransitionModal>
      </div>
    </>
  )
}
