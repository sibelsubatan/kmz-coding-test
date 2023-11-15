import type {ViewStyle} from 'react-native';
import theme from '../../theme';

export const container: ViewStyle = {
  flexDirection: 'row',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.36,
  shadowRadius: 3.68,
  elevation: 11,
  borderRadius: 10,
  borderColor: 'red',
  backgroundColor: theme.colors.WHITE,
  width: theme.DEVICE_WIDTH * 0.9,
  paddingVertical: 15,
  marginVertical: 10,
  paddingHorizontal: 10,
};

export const input: ViewStyle = {
  paddingHorizontal: 5,
  flex: 1,
};
