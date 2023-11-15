import React, {FC, useEffect, useLayoutEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import * as styles from './styles';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GenericNavigationProps} from '@app/navigation/types';
import {useAppSelector} from '@app/hooks/useStoreDispatch';

const Loading: FC = () => {
  const {setOptions, navigate} = useNavigation<GenericNavigationProps>();
  const {isLogged} = useAppSelector(state => state.loginPageStore);
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, [setOptions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFocused) {
        if (isLogged === true) {
          console.log('isLogged', isLogged);

          navigate('BottomTabs', {
            gestureEnabled: false,
          });
        } else {
          console.log('isLogged', isLogged);

          navigate('Login', {
            gestureEnabled: false,
          });
        }
      }
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate, isFocused, isLogged]);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Loading;
