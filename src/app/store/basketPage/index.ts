import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '@app/api';

export interface BasketPageState {
  productList: any | [];
}

const initialState: BasketPageState = {
  productList: [],
};

export const basketPageSlice = createSlice({
  name: 'basketPageStore',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<any | []>) => {
      state.productList = action.payload;
    },
  },
});

export const getProductList = createAsyncThunk(
  'basketPageStore/getProductList',
  async (_, {dispatch, getState}) => {
    try {
      const UserAPIClient = await API();
      const {data} = await UserAPIClient.get('sf/cart/cart-v2?/userId=1');

      console.log('sepet data', data);
    } catch (error) {
      console.error(error);
    }
  },
);

export const {setProductList} = basketPageSlice.actions;

export default basketPageSlice.reducer;
