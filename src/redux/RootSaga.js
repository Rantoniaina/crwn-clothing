import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./Shop/Shop.sagas";
import { userSaga } from "./User/User.sagas";
import { cartSagas } from "./Cart/Cart.sagas";
import { shopSagas } from "./Shop/Shop.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSaga),
    call(cartSagas),
    call(shopSagas),
  ]);
}
