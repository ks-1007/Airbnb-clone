import { useState } from "react"
import styles from "./Css/stickydiv.module.css"

export const StickyBox = (props) => {
  const { days } = props.props
  const { name, address, details, images, price, review, starRating } =
    props.props.room

  const image = images[0].url
  const hotelName = (name + "").slice(0, name.length - 10)
  const discount = days > 6 ? true : false
  const totalPrice = days * Number(price)
  const serviceFee = Math.round(totalPrice / 100) * 6
  const taxes = Math.round(totalPrice / 100) * 4

  const mainPrice = totalPrice + serviceFee + taxes

  return (
    <>
      {/* one div is required to wrap this with relative display
            in which this box will move
          thatdivclass{
              position: relative !important;
          }
        */}
      <div className={styles.stickyBox_container}>
        <div
          style={{ marginBottom: "100px" }}
          className={styles.stickyBox_card}
        >
          <div>
            <div style={{ paddingBottom: "24px" }}>
              <div className={styles.hotelAndImg_Box}>
                {/*div for hotel image  */}
                <div className={styles.img_Box}>
                  <div className={styles.inside_img_Box}>
                    <img className={styles.img} alt="img" src={image} />
                  </div>
                </div>
                {/*div for hotel image  */}
                {/*div for hotel details  */}
                <div className={styles.hotelDetails_Box}>
                  <div className={styles._hotel_tagLine}>{hotelName}</div>
                  <div className={styles._hotel_address}>
                    {`${address.line1} ${address.city} ${address.countryName}`}
                  </div>
                  <div className={styles._hotelFeatures}>{details}</div>
                  {/*div for hotel details  */}
                  {/*div for hotel rating and superhost */}
                  <div className={styles._hotelRating_superhost_Box}>
                    <div className={styles._rating_Box}>
                      <span className={styles._rbox_1}>
                        <span className={styles.rating_star}>
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              display: "block",
                              height: "12px",
                              width: "12px",
                              fill: "currentcolor",
                            }}
                          >
                            <path
                              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className={styles._rating_no}>{starRating}</span>
                        <span className={styles._reviews}>
                          &nbsp;({review} reviews)
                        </span>
                      </span>
                    </div>
                    <div className={styles._superhost_Box}>
                      <svg
                        viewBox="0 0 69 115"
                        style={{
                          display: "block",
                          height: "12px",
                          width: "12px",
                          marginTop: "3px",
                          fill: "currentcolor",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m68.9983171 49.2200074c-.001683 2.9358823-1.6459025 5.8024264-4.3974878 7.8470588l-24.4344147 19.1542647c8.3944391 2.4623529 14.5287074 10.2519117 14.5287074 19.4840441 0 11.207426-9.0423659 20.294118-20.195122 20.294118s-20.195122-9.086692-20.195122-20.294118c0-9.2422794 6.1460488-17.0402941 14.5556342-19.4925l-24.52360976-19.1965441c-3.0612439-2.6399265-4.33858537-4.8705883-4.33690244-7.7963235v-40.94507358c.00168293-3.51933823 3.81014634-7.27882353 7.30895122-7.27544117h54.38209758c3.5004878.00338235 7.3089512 3.75948529 7.3072683 7.27544117-.001683 4.01992648-.001683 9.08161768 0 19.95419118v.8625c.0016829 11.8314706.0016829 16.3807353 0 20.1283824"
                          fill="#fff"
                        />
                        <path
                          d="m62.2682927 48.35125c0 1.5778676-.9542195 3.2605882-2.6926829 4.5661765l-22.4872683 17.8503676c-1.5533415 1.2294853-3.589683 1.2311765-5.1379756 0l-22.49400005-17.8233088c-2.04307317-1.7875735-2.72465853-2.9950735-2.72465853-4.5915441v-37.2058824c0-1.40536762 1.98080488-3.38404409 3.36417068-3.38235292h48.806561c1.3867317.00169118 3.3658537 1.97867647 3.3658537 3.38235292-.0016829 3.6529412-.0016829 8.2529412 0 18.1327941v.7847059c.0016829 10.7474265.0016829 14.882353 0 18.2866912m3.3658536-18.2883824v-.7830147c-.0016829-9.8781617-.0016829-14.4798529 0-18.1311029.001683-3.2775-3.4887073-6.76301471-6.7300243-6.76639706h-48.806561c-3.23963417-.00338235-6.73002441 3.48720588-6.73170734 6.76470586v37.2058824c-.00168293 2.7058823 1.16626829 4.7691176 3.94478049 7.1959559l22.55290245 17.8740441c2.7700975 2.2019117 6.5331219 2.2002206 9.3099512-.0016912l22.4552927-17.8216176c2.5041951-1.8839706 4.0036829-4.5306618 4.0053658-7.2466912.001683-3.4060294.001683-7.5392647 0-18.2900736m-31.1341463 79.1724264c-7.4351707 0-13.4634146-6.057794-13.4634146-13.5294116 0-7.4716177 6.0282439-13.5294118 13.4634146-13.5294118s13.4634146 6.0577941 13.4634146 13.5294118c0 7.4716176-6.0282439 13.5294116-13.4634146 13.5294116m0-30.4411764c-9.2948049 0-16.8292683 7.5713971-16.8292683 16.9117648 0 9.3403676 7.5344634 16.9117646 16.8292683 16.9117646s16.8292683-7.571397 16.8292683-16.9117646c0-9.3403677-7.5344634-16.9117648-16.8292683-16.9117648"
                          fill="#484848"
                        />
                        <path
                          d="m10.394261 49.4396912 48.5086829-38.2933088v38.0514705l-24.4529268 19.2438971zm34.0668146 50.0217867c-1.4826585 4.1095591-5.3045854 7.0538971-9.8299756 7.0538971-5.8060976 0-10.511561-4.824926-10.511561-10.7727941 0-3.6833824 1.8091464-6.9270588 4.5607317-8.8702206z"
                          fill="#ffb400"
                        />
                        <path
                          d="m34.451 68.647-24.354-19.448v-38.052l48.805 38.052z"
                          fill="#ff5a5f"
                        />
                      </svg>

                      <span className={styles.superhost_tagLine}>
                        Superhost
                      </span>
                    </div>
                  </div>
                </div>
                {/*div for hotel rating and superhost */}
              </div>
            </div>
          </div>
          <div className={styles.lineBreaker}></div>
          {/*price details TagLine div */}
          <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
            <div style={{ fontSize: "16px", lineHeight: "20px" }}>
              <section>
                <div
                  style={{
                    fontSize: "22px",
                    lineHeight: "26px",
                    fontWeight: "800",
                  }}
                >
                  <h2 style={{ color: "black" }} className={styles.tagLine}>
                    Price details
                  </h2>
                </div>
              </section>
            </div>
          </div>
          {/*price details TagLine div */}
          {/*price details box*/}
          <div>
            <div style={{ marginTop: "0px" }}>
              <div className={styles.price_Information_Box}>
                <div className={styles.price_category_Box}>
                  <div className={styles.price_category_details}>
                    ???{price} x {days} nights
                  </div>
                </div>
                <div className={styles.price_rupees_Box}>
                  <div className={styles.price_rupees_wrapper}>
                    <span className={styles.price_rupees_details}>
                      <span>???{totalPrice}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "16px" }}>
              <div className={styles.price_Information_Box}>
                <div className={styles.price_category_Box}>
                  <div className={styles.price_category_details}>
                    Service fee
                  </div>
                </div>
                <div className={styles.price_rupees_Box}>
                  <div className={styles.price_rupees_wrapper}>
                    <span className={styles.price_rupees_details}>
                      <span>???{serviceFee}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <div className={styles.price_Information_Box}>
                <div className={styles.price_category_Box}>
                  <div className={styles.price_category_details}>
                    Occupancy taxes and fees
                  </div>
                </div>
                <div className={styles.price_rupees_Box}>
                  <div className={styles.price_rupees_wrapper}>
                    <span className={styles.price_rupees_details}>
                      <span>???{taxes}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <div className={styles.price_Information_Box}>
                <div className={styles.price_category_Box}>
                  <div className={styles.price_category_details}>
                    Total(INR)
                  </div>
                </div>
                <div className={styles.price_rupees_Box}>
                  <div className={styles.price_rupees_wrapper}>
                    <span className={styles.price_rupees_details}>
                      <span>???{mainPrice}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*price details box*/}
        </div>
      </div>
    </>
  )
}
