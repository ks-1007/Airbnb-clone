import { Route, Switch } from "react-router-dom"
import SearchPage from "../Components/SearchPage"
import { ConfirmAndPay } from "../Pages/confirmAndPay"
import { Home } from "../Pages/home"
import { RoomDetailsPage } from "../Pages/RoomDetailsPage"

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/hotels">
        <SearchPage />
      </Route>
      <Route exact path="/room/:hotelId">
        <RoomDetailsPage />
      </Route>
      <Route exact path="/payment/:hotelId">
        <ConfirmAndPay />
      </Route>
    </Switch>
  )
}
