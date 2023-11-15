import {ViewStyle} from 'react-native';
import theme from '@app/theme';

export const splashContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.BOTTOM_NAV_COLOR,
  position: 'relative',
} as ViewStyle;

export const indicatorContainer = {
  position: 'absolute',
  bottom: 20,
  right: 0,
  left: 0,
} as ViewStyle;
