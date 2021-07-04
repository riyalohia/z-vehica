import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import { CarsList } from './redux/carsList';
import { Categories } from './redux/categories';
import { FavouriteCars } from './redux/favouriteCars';

const middlewares = [thunk];
export const rootConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['carsList', 'categories'],
};

const rootReducer = combineReducers({
  carsList: CarsList,
  categories: Categories,
  favouriteCars: FavouriteCars
});

const middleware = applyMiddleware(...middlewares);
const persisted = persistReducer(rootConfig, rootReducer);
const store = createStore(
  persisted,
  middleware
);

export const persistor = persistStore(store);

export default store;
