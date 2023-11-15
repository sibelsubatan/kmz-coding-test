/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import React, {FC, useLayoutEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {GenericNavigationProps} from '@app/navigation/types';
import {useAppDispatch, useAppSelector} from '@app/hooks/useStoreDispatch';
import * as styles from './styles';
import {
  getProductCategories,
  getProductInnerCategories,
} from '@app/store/homePage';
import {ArrowRight2, CloseSquare, HambergerMenu} from 'iconsax-react-native';
import theme from '@app/theme';
import {Divider} from 'react-native-paper';
import NoRecordRound from '@app/components/NoRecordRound';

const HomeScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();
  const {categoriesList, categoriesItemList} = useAppSelector(
    state => state.homePageStore,
  );
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleVisible: false,
      headerTitle: '',
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => {
              setOpenMenu(!openMenu);
              dispatch(getProductCategories());
            }}>
            {openMenu === false ? (
              <HambergerMenu color={theme.colors.BLACK} size={30} />
            ) : (
              <CloseSquare color={theme.colors.BLACK} size={30} />
            )}
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, dispatch, openMenu]);

  const renderItemCategoryList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setOpenMenu(false);
          dispatch(getProductInnerCategories(item.id));
        }}
        key={index}>
        <View style={styles.menuItemContainer}>
          <Text style={styles.renderItemText}>{item.categoryName}</Text>
          <ArrowRight2 color={theme.colors.BLACK} />
        </View>
        <Divider />
      </TouchableOpacity>
    );
  };

  const renderItemCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#fff',
          marginHorizontal: 5,
        }}
        onPress={() => {
          navigation.navigate('ProductListScreen', item);
        }}>
        {item.imagePath.imagePath != null && (
          <Image
            source={{uri: item.imagePath.imagePath}}
            style={{
              width: theme.DEVICE_WIDTH * 0.25,
              height: theme.DEVICE_HEIGHT * 0.1,
              resizeMode: 'contain',
            }}
          />
        )}
        <Text
          style={{
            textAlign: 'center',
            backgroundColor: '#fff',
            color: theme.colors.BLACK,
            fontSize: theme.fontSizes.xs,
            width: theme.DEVICE_WIDTH * 0.25,
          }}
          numberOfLines={2}>
          {item.categoryName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {openMenu && (
        <View
          style={{
            flex: 1,
            height: theme.DEVICE_HEIGHT,
          }}>
          <FlatList
            data={categoriesList}
            renderItem={renderItemCategoryList}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => <NoRecordRound />}
          />
        </View>
      )}
      <FlatList
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        data={categoriesItemList}
        renderItem={renderItemCategory}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <NoRecordRound />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
