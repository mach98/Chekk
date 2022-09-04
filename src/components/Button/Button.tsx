import React, {FC} from 'react';

import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

import IButton from './Button.interface';

const Button: FC<IButton> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
