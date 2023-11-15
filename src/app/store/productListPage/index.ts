import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '@app/api';
import RNProgressHud from 'progress-hud';

export interface ProductListPageState {
  productList: any | [];
  addProduct: any;
}

const initialState: ProductListPageState = {
  productList: [],
  addProduct: [],
};

export const productListPageSlice = createSlice({
  name: 'productListPageStore',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<any | []>) => {
      state.productList = action.payload;
    },
    setAddProduct: (state, action: PayloadAction<any>) => {
      if (action.payload.length > 0) {
        state.addProduct = [...state.addProduct, ...action.payload];
      } else {
        state.addProduct = [];
      }
    },
  },
});

export const getProductList = createAsyncThunk(
  'productListPageStore/getProductList',
  async (item: any, {dispatch}) => {
    try {
      const UserAPIClient = await API();
      console.log('id', item);
      const {data} = await UserAPIClient.get(
        'sf/product/category_products?PageNumber=1&PageSize=10&CategoryId=' +
          item.id,
      );
      dispatch(setProductList([]));

      if (data.data.length > 0) {
        dispatch(setProductList(data.data));
      }
    } catch (error) {
      console.error(error);
    }
  },
);
export const postProduct = createAsyncThunk(
  'productListPageStore/postProduct',
  async (item: any, {getState}) => {
    const {
      loginPageStore: {users},
    } = getState() as any;
    try {
      const UserAPIClient = await API(users);
      const postData: any = {
        productId: item.id,
        amount: 1,
        userId: 1,
      };
      const {data} = await UserAPIClient.post('sf/cart/cart', postData);
      if (data.status === true) {
        RNProgressHud.showInfoWithStatus(
          data.data.message,
          RNProgressHud.ProgressHUDMaskType.Black as any,
        );
        RNProgressHud.dismissWithDelay(1.5);
        return;
      }
      RNProgressHud.showInfoWithStatus(
        data.data.errors[0].errorMessage,
        RNProgressHud.ProgressHUDMaskType.Black as any,
      );
      RNProgressHud.dismissWithDelay(1.5);
    } catch (error) {
      console.log('error', error);
      RNProgressHud.showInfoWithStatus(
        JSON.stringify(error.message),
        RNProgressHud.ProgressHUDMaskType.Black as any,
      );
      RNProgressHud.dismissWithDelay(1.5);
    }
  },
);

export const {setProductList, setAddProduct} = productListPageSlice.actions;

export default productListPageSlice.reducer;
