import colors from './colors';
import typography from './typography';
import padding from '@app/theme/padding';
import margin from '@app/theme/margin';
import justify from '@app/theme/justify';
import * as sizes from '@app/theme/sizes';
import flexDirection from './flexDirection';
import align from '@app/theme/align';
import flex from '@app/theme/flex';
import position from './position';

const theme = {
  colors: {
    ...colors,
  },
  ...typography,
  ...padding,
  ...margin,
  ...sizes,
  ...justify,
  ...align,
  ...flexDirection,
  ...flex,
  ...position,
  shadow: {
    elevation: 6,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
  },
};

export default theme;
