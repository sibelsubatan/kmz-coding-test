import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '@app/api';
import {navigationRef} from '@app/navigation/navigationUtils';
import RNProgressHud from 'progress-hud';

export interface LoginPageState {
  users: any[];
  username: string;
  password: string;
  isLogged: boolean;
}

const initialState: LoginPageState = {
  users: [],
  username: '',
  password: '',
  isLogged: false,
};

export const loginPageSlice = createSlice({
  name: 'loginPageStore',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload.trim();
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload.trim();
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
});

export const signInAsync = createAsyncThunk(
  'loginPageStore/signIn',
  async (_d, {dispatch, getState}) => {
    const {
      loginPageStore: {username, password},
    } = getState() as any;
    if (
      !username ||
      !password ||
      username.length === 0 ||
      password.length === 0
    ) {
      RNProgressHud.showErrorWithStatus(
        'Lütfen kullanıcı adı ve şifre alanını doldurunuz.',
        RNProgressHud.ProgressHUDMaskType.Black as any,
      );
      RNProgressHud.dismissWithDelay(1.5);
      return;
    }
    try {
      const UserAPIClient = await API();

      const {data: user} = await UserAPIClient.post('sf/auth/login', {
        username: username,
        password: password,
      });
      if (user) {
        dispatch(setUsers(user));
        dispatch(setIsLogged(true));
        navigationRef.navigate('BottomTabs');
      }
    } catch (error) {
      RNProgressHud.showErrorWithStatus(
        'Lütfen kullanıcı adınızı ve şifrenizi kontrol ediniz.',
        RNProgressHud.ProgressHUDMaskType.Black as any,
      );
      RNProgressHud.dismissWithDelay(1.5);
      console.error(error);
    }
  },
);

export const {setUsers, setPassword, setUserName, setIsLogged} =
  loginPageSlice.actions;

export default loginPageSlice.reducer;
