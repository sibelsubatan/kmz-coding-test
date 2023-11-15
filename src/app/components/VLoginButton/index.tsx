import {Pressable, Text} from 'react-native';
import React from 'react';
import * as styles from './styles';

interface Props {
  label: string;
  style?: object;
  onPress?: () => void;
}
const VLoginButton = ({label, style, onPress}: Props): React.JSX.Element => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default VLoginButton;
