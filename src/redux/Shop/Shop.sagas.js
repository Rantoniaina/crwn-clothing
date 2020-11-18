import { takeEvery, call, put } from "redux-saga/effects";
import ShopActionsTypes from "./Shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/Firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./Shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
