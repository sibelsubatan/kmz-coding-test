import {useNavigation} from '@react-navigation/native';
import React, {FC, useLayoutEffect} from 'react';
import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import {GenericNavigationProps} from '@app/navigation/types';
import {useAppDispatch} from '@app/hooks/useStoreDispatch';
import * as styles from './styles';

const SearchScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: 'Ara',
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: '#FFF',
      },
    });
  }, [navigation, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Ara</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
