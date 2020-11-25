import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./Shop/Shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
