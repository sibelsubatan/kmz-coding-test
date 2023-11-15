import {Danger} from 'iconsax-react-native';
import React, {type FC} from 'react';
import {Text, View} from 'react-native';
import theme from '@app/theme';

const NoRecordRound: FC = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: theme.DEVICE_WIDTH * 0.9,
        alignContent: 'center',
        alignSelf: 'center',
      }}>
      <Danger size={60} color={theme.colors.DARK_GRAY} />
      <Text
        style={{
          fontSize: theme.fontSizes.sm,
          fontWeight: 'bold',
          color: theme.colors.DARK_GRAY,
          marginTop: 10,
          maxWidth: theme.DEVICE_WIDTH * 0.9,
          textAlign: 'center',
        }}>
        {'Kayıt Bulunamadı'}
      </Text>
    </View>
  );
};

export default NoRecordRound;
