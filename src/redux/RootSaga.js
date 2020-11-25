import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./Shop/Shop.sagas";
import { userSaga } from "./User/User.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSaga)]);
}
