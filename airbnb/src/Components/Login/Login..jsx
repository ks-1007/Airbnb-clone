import React, { useEffect } from "react"

import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import { setToken } from "../../Store/action"
import styles from "./Login.module.css"
import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
export function Login({ closeModal }) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const responseGoogle = ({ tokenId }) => {
    // if (token) {
    //   alert("Already signed in")
    // } else {
    dispatch(setToken(tokenId))
    // }
  }
  // useEffect(() => {
  //   console.log(token)
  //   if (token !== "") {
  //     closeModal()
  //   }
  // }, [token])
  return (
    <GoogleLogin
      clientId="703875248172-4p61g2l4e7gur3b64ou02nfr01anuh6h.apps.googleusercontent.com"
      render={(renderProps) => (
        <div
          className={styles.loginIconBox}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          {/* <img
            style={{ width: 48, height: 48, borderRadius: "10" }}
            src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png"
            alt=""
          /> */}
          <FcGoogle style={{ fontSize: "50px" }} />
          <p>Continue with Google</p>
        </div>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  )
}
