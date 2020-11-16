import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import { persistStore } from "redux-persist";
import CreateSageMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./Shop/Shop.sagas";

const sageMiddleware = CreateSageMiddleware();

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));

sageMiddleware.run(fetchCollectionsStart);

const persistor = persistStore(store);

export { store, persistor };
