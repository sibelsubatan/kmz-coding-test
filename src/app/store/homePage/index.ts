import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '@app/api';

export interface HomePageState {
  categoriesList: any | [];
  categoriesItemList: any | [];
}

const initialState: HomePageState = {
  categoriesList: [],
  categoriesItemList: [],
};

export const homePageSlice = createSlice({
  name: 'homePageStore',
  initialState,
  reducers: {
    setCategoriesList: (state, action: PayloadAction<any | []>) => {
      state.categoriesList = action.payload;
    },
    setCategoriesItemList: (state, action: PayloadAction<any | []>) => {
      state.categoriesItemList = action.payload;
    },
  },
});

export const getProductCategories = createAsyncThunk(
  'homePageStore/getProductCategories',
  async (_d, {dispatch}) => {
    try {
      const UserAPIClient = await API();

      const {data} = await UserAPIClient.get('ad/product/categories');
      console.log('data.data.categories', data.data.categories);
      if (data.data.categories.length > 0) {
        dispatch(setCategoriesList(data.data.categories));
      }
    } catch (error) {
      console.error(error);
    }
  },
);

export const getProductInnerCategories = createAsyncThunk(
  'homePageStore/getProductInnerCategories',
  async (id: string, {dispatch}) => {
    try {
      const UserAPIClient = await API();
      console.log('id', id);
      const {data} = await UserAPIClient.get(
        'ad/product/categories?parentId=' + id,
      );
      dispatch(setCategoriesItemList([]));
      if (data.data.categories.length > 0) {
        dispatch(setCategoriesItemList(data.data.categories));
      }
    } catch (error) {
      console.error(error);
    }
  },
);

export const {setCategoriesList, setCategoriesItemList} = homePageSlice.actions;

export default homePageSlice.reducer;
