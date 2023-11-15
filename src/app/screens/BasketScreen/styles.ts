import {TextStyle, ViewStyle} from 'react-native';
import theme from '@app/theme';

export const container: ViewStyle = {
  height: theme.DEVICE_HEIGHT,
  backgroundColor: theme.colors.WHITE,
  flex: 1,
};

export const renderItemContainer: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  backgroundColor: '#fff',
  marginBottom: '4%',
};

export const menuItemContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 10,
  marginVertical: 5,
};

export const renderItemText: TextStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
  color: '#000',
};

export const contentContainerStyle = {
  justifyContent: 'flex-start',
} as ViewStyle;
