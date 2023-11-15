import {useNavigation} from '@react-navigation/native';
import React, {FC, useLayoutEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GenericNavigationProps} from '@app/navigation/types';
import {useAppDispatch, useAppSelector} from '@app/hooks/useStoreDispatch';
import * as styles from './styles';
import {getProductList} from '@app/store/basketPage';
import {AddCircle, Trash} from 'iconsax-react-native';
import theme from '@app/theme';
import {moneyFormat} from '@app/utils/moneyFormat';
import NoRecordRound from '@app/components/NoRecordRound';
import InputSpinner from 'react-native-input-spinner';

const BasketScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();
  const {productList} = useAppSelector(state => state.basketPageStore);

  useLayoutEffect(() => {
    dispatch(getProductList());

    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: 'Sepet',
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: '#FFF',
      },
    });
  }, [navigation, dispatch]);
  const renderItemCategory = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: theme.DEVICE_WIDTH * 0.95,
          alignSelf: 'center',
          paddingHorizontal: 5,
        }}>
        <Image
          source={{uri: item.productImages[0].imagePath}}
          style={{
            width: theme.DEVICE_WIDTH * 0.25,
            resizeMode: 'contain',
            aspectRatio: 1,
          }}
        />
        <View
          style={{
            width: theme.DEVICE_WIDTH * 0.4,
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: theme.colors.BLACK,
              fontSize: theme.fontSizes.xs,
            }}>
            {item.stockName}
          </Text>
          <View>
            <InputSpinner
              max={20} //item.stock
              min={2}
              step={1}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              value={moneyFormat(item.price)}
              onChange={num => {
                console.log(num);
              }}
              height={30}
            />
          </View>
        </View>
        <View
          style={{
            width: theme.DEVICE_WIDTH * 0.25,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              console.log('item');
            }}>
            <Trash variant={'Bold'} color={theme.colors.BLACK} />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'right',
              color: theme.colors.BOTTOM_NAV_COLOR,
              fontSize: theme.fontSizes.xs,
            }}>
            {moneyFormat(item.price)} {'TL'}
          </Text>
        </View>
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

export default BasketScreen;
