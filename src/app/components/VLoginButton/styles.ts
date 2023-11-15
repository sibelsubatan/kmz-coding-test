import type {TextStyle, ViewStyle} from 'react-native';
import theme from '../../theme';

export const container: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 14,
  borderRadius: 10,
  backgroundColor: theme.colors.BOTTOM_NAV_COLOR,
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  alignSelf: 'center',
};

export const text: TextStyle = {
  color: theme.colors.WHITE,
  fontSize: theme.fontSizes.xl,
  fontWeight: '500',
};
