import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCombineReducers} from 'redux-persist';
import homePageSlice from './homePage';
import loginPageSlice from './login';
import productListPageSlice from './productListPage';
import basketPageSlice from './basketPage';

const reducers = {
  homePageStore: homePageSlice,
  loginPageStore: loginPageSlice,
  productListPageStore: productListPageSlice,
  basketPageStore: basketPageSlice,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  whitelist: ['loginPageStore'],
  blacklist: ['homePageStore', 'productListPageStore', 'basketPageSlice'],
};

export const persistedRootReducer = persistCombineReducers(
  persistConfig,
  reducers,
);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
