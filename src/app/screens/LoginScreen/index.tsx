/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import {useAppDispatch} from '@app/hooks/useStoreDispatch';
import * as styles from './styles';
import {setPassword, setUserName, signInAsync} from '@app/store/login';
import theme from '@app/theme';
import {Eye, EyeSlash, Lock, Profile} from 'iconsax-react-native';
import VLoginInput from '@app/components/VLoginInput';
import VLoginButton from '@app/components/VLoginButton';

const LoginScreen: FC = () => {
  const dispatch = useAppDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.WHITE,
            width: theme.DEVICE_WIDTH,
            height: theme.DEVICE_HEIGHT,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: theme.fontSizes['3xl'],
              color: theme.colors.BLACK,
              fontWeight: 'bold',
            }}>
            Hoş Geldiniz
          </Text>

          <VLoginInput
            placeholder={'Kullanıcı Adı'}
            icon={
              <Profile
                size="24"
                color={theme.colors.DARK_GRAY}
                variant="Bold"
              />
            }
            onChangeText={(val: any) => {
              dispatch(setUserName(val));
            }}
            secureTextEntry={false}
            leftIconVisible={false}
          />
          <VLoginInput
            placeholder={'Şifre'}
            icon={
              <Lock size="24" color={theme.colors.DARK_GRAY} variant="Bold" />
            }
            onChangeText={(val: any) => {
              dispatch(setPassword(val));
            }}
            secureTextEntry={secureTextEntry}
            leftIconVisible={true}
            onSecureTextEntry={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
            leftIcon={
              secureTextEntry ? (
                <Eye
                  color={theme.colors.DARK_GRAY}
                  size="24"
                  variant={'Bold'}
                />
              ) : (
                <EyeSlash
                  color={theme.colors.DARK_GRAY}
                  size="24"
                  variant={'Bold'}
                />
              )
            }
          />
          <VLoginButton
            label={'Giriş'}
            onPress={() => dispatch(signInAsync())}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
