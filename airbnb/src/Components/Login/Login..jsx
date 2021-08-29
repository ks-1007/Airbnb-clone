import React from "react"
import ReactDOM from "react-dom"
import GoogleLogin from "react-google-login"
import styles from "./Login.module.css"

const responseGoogle = (response) => {
  console.log(response)
}
export function Login() {
  return (
    <GoogleLogin
      clientId="493953240158-22m734jk85m0h1qf91lfask8sbe6ioid.apps.googleusercontent.com"
      render={(renderProps) => (
        <div
          className={styles.loginIconBox}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img
            style={{ width: 48, height: 48, borderRadius: "10" }}
            src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png"
            alt=""
          />
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
