import {ImageStyle, ViewStyle} from 'react-native';
import theme from '@app/theme';

export const splashContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.BOTTOM_NAV_COLOR,
  position: 'relative',
} as ViewStyle;

export const splashLogo = {
  width: 150,
  height: 150,
  resizeMode: 'contain',
} as ImageStyle;
