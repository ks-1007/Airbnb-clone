import React from "react"
import ReactDOM from "react-dom"
import GoogleLogin from "react-google-login"
// or

const responseGoogle = (response) => {
  console.log(response)
}
export function Login() {
  return (
    <GoogleLogin
      clientId="493953240158-q7pc5314v5q80m1o0a4b6dufkk2o35rn.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  )
}
