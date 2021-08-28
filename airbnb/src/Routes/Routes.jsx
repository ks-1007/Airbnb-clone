import { Route, Switch } from "react-router-dom"
import SearchPage from "../Components/SearchPage"
import { ConfirmAndPay } from "../Pages/confirmAndPay"
import { RoomDetailsPage } from "../Pages/RoomDetailsPage"

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>
      <Route exact path="/room/:hotelId">
        <RoomDetailsPage />
      </Route>
      <Route exact path="/payment">
        <ConfirmAndPay />
      </Route>
    </Switch>
  )
}
