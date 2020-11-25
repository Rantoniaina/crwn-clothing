import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./User.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/Firebase.utils";
import { googleSignInSuccess, googleSignInFailure } from "./User.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    console.log(userRef);
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart)]);
}
