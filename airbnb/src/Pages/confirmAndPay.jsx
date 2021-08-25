import { ConfirmAndPayNavbar } from "../Components/confirmAndPayComp/confirmAndPayNavbar";
import { NavLink } from "react-router-dom";
import SlidingSwitch from '../Components/confirmAndPayComp/confirmAndPayButton';
import styles from "./Css/confirmAndPay.module.css";
import React from "react"

export const ConfirmAndPay = () => {

    const [state, setState] = React.useState({
        checkedB: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
  return (
    <>
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
                          className={styles.tripDetailsBoldName_Details_TagLine}
                        >
                          <div
                            className={
                              styles.tripDetailsBoldName_Details_TagLineDetails
                            }
                          >
                            <h3 className={styles.tagLine}>Dates</h3>
                          </div>
                          <div className={styles.TagDetails}>
                            7 Sep – 21 Sep
                          </div>
                        </div>
                        <button className={styles.button_underline}>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingBottom: "24px" }}>
                    <div>
                      <div className={styles.tripDetailsBoldNamewithDetails}>
                        <div
                          className={styles.tripDetailsBoldName_Details_TagLine}
                        >
                          <div
                            className={
                              styles.tripDetailsBoldName_Details_TagLineDetails
                            }
                          >
                            <h3 className={styles.tagLine}>Guests</h3>
                          </div>
                          <div className={styles.TagDetails}>1 guest</div>
                        </div>
                        <button className={styles.button_underline}>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* div for switch, is this a work trip option*/}
                  <div>
                    <div className={styles.lineBreaker}></div>
                    <div>
                       <div style={{paddingBottom: "24px" ,paddingTop: "24px"}}>
                       <div className={styles.workTrip}>
                        <div
                          className={styles.tripDetailsBoldName_Details_TagLine}
                        >
                          <div
                            className={
                              styles.tripDetailsBoldName_Details_TagLineDetails
                            }
                          >
                            <h3 className={styles.tagLine}>Is this a work trip?</h3>
                          </div>
                        </div>
                       <SlidingSwitch checked={state.checkedB} onChange={handleChange} name="checkedB"/>
                      </div>
                    </div>
                    {state.checkedB ? <div style={{ paddingBottom: "24px",paddingTop:"8px" }}>
                    <div>
                      <div className={styles.tripDetailsBoldNamewithDetails}>
                        <div
                          className={styles.tripDetailsBoldName_Details_TagLine}
                        >
                          <div
                            className={
                              styles.tripDetailsBoldName_Details_TagLineDetails
                            }
                          >
                            <h3 className={styles.tagLine}>Trip purpose (optional)</h3>
                          </div>
                          <div style={{marginTop:"4px"}} className={styles.TagDetails1}>Add a note for expensing purposes.</div>
                        </div>
                        <button className={styles.NoteButton}>Add</button>
                      </div>
                    </div>
                  </div>:<></>}
                    <div className={styles.lineBreaker}></div>
                    </div>
                  </div>
                  {/* div for radio is this a work trip option*/}

                  {/* div for payment Option */}
                  <div style={{paddingTop: "24px",paddingBottom: "24px"}}>
                     <div>
                         <section>
                             <div>
                                 <div>
                                     <div className={styles.playwith}>
                                         <label className={styles.payment_option_selector} for="payment_option_selector">
                                             <div className={styles.payment_option_selector_container} >
                                             <h2  className={styles.tagLine}>Pay with</h2>
                                             </div>
                                         </label>
                                         <div className={styles.paymentCards}>
                                         <span className={styles.paymentCard}>
                                             <span role="img" aria-label="Mastercard">
                                                 <img src="https://a0.muscache.com/airbnb/static/packages/logo_mastercard.f18379cf.svg" alt="Mastercard" height="9" aria-hidden="true"/>
                                             </span>
                                         </span>
                                         <span className={styles.paymentCard}>
                                             <span role="img" aria-label="Visa Card">
                                                 <img src="https://a0.muscache.com/airbnb/static/packages/logo_visa.0adea522.svg" alt="Visa Card" height="9" aria-hidden="true"/>
                                             </span>
                                         </span>
                                         <span className={styles.paymentCard}>
                                            <span role="img" aria-label="American Express Card">
                                                 <img src="https://a0.muscache.com/airbnb/static/packages/logo_amex.84088b52.svg" alt="American Express Card" height="9" aria-hidden="true"/>
                                            </span>
                                         </span>
                                         </div>
                                     </div>         
                                 </div>
                                 <div className={styles.creditOrDedit_container}>
                                       <div>
                                           
                                       </div>
                                 </div>
                             </div>
                         </section>
                     </div>    
                  </div>
                  {/* div for payment Option */}
                </div>
              </div>
            </div>
            <div className={styles.priceDetailsBox}></div>
          </div>
        </div>
      </div>
    </>
  );
};



