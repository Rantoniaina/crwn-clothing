import { takeEvery } from "redux-saga/effects";
import ShopActionsTypes from "./Shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
