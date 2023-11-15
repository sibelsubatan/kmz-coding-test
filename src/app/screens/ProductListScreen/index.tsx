/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import React, {FC, useLayoutEffect} from 'react';
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
import * as styles from './style';
import {AddCircle, ArrowLeft2} from 'iconsax-react-native';
import theme from '@app/theme';
import {getProductList, postProduct} from '@app/store/productListPage';
import NoRecordRound from '@app/components/NoRecordRound';
import {moneyFormat} from '@app/utils/moneyFormat';
import RNProgressHud from 'progress-hud';

const ProductListScreen: FC = (props: any) => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();
  const {productList} = useAppSelector(state => state.productListPageStore);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleVisible: false,
      headerTitle: 'Ürün Listesi',
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft2 />
          </TouchableOpacity>
        );
      },
    });
    dispatch(getProductList(props?.route.params));
  }, [navigation, dispatch]);

  const postControl = item => {
    console.log('item', item);
    if (item.stock === 0) {
      RNProgressHud.showErrorWithStatus(
        'Ürün miktarı hatası bulunmaktadır.Lütfen ürün miktarını kontrol ediniz.',
        RNProgressHud.ProgressHUDMaskType.Black as any,
      );
      RNProgressHud.dismissWithDelay(1.5);
      return;
    }
    dispatch(postProduct(item));
  };

  const renderItemCategory = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#fff',
          marginHorizontal: 5,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => postControl(item)}>
          <AddCircle variant={'Bold'} color={theme.colors.BLACK} />
        </TouchableOpacity>

        <Image
          source={{uri: item.productImages[0].imagePath}}
          style={{
            width: theme.DEVICE_WIDTH * 0.25,
            height: theme.DEVICE_HEIGHT * 0.1,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            color: theme.colors.BOTTOM_NAV_COLOR,
            fontSize: theme.fontSizes.xs,
          }}>
          {moneyFormat(item.price)} {item.currency}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            backgroundColor: '#fff',
            color: theme.colors.BLACK,
            fontSize: theme.fontSizes.xs,
          }}>
          {item.stockName}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={productList}
        renderItem={renderItemCategory}
        keyExtractor={item => item.id}
        numColumns={3}
        ListEmptyComponent={() => <NoRecordRound />}
      />
    </SafeAreaView>
  );
};

export default ProductListScreen;
