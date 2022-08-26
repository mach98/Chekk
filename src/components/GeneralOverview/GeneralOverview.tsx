import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import styles from './GeneralOverview.styles';

interface IProps {
  onPress?: () => void;
}

const GeneralOverview: FC<IProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name="grid" size={30} style={styles.iconStyle} />
        <View style={styles.iconText}>
          <Text>General Overview</Text>
          <Text>View all activities on your account</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GeneralOverview;
