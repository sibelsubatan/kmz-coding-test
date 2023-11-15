import {useNavigation} from '@react-navigation/native';
import React, {FC, useLayoutEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GenericNavigationProps} from '@app/navigation/types';
import {useAppDispatch} from '@app/hooks/useStoreDispatch';
import * as styles from './styles';

const AccountScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: 'Profil',
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: '#FFF',
      },
    });
  }, [navigation, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
