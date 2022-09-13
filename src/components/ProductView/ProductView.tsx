import React, {FC} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import IProductView from './ProductView.interface';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ProductView.styles';

const TEST_IMAGE = '../../assets/images/nivea1.png';

const ProductView: FC<IProductView> = ({
  rewardType,
  estimatedTime,
  productImage,
  answeredQuestions,
  TotalQuestions,
  productName,
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <View style={styles.cardHeader}>
          {/**  <Image source={require(rewardType)} /> */}
          <Text>Image</Text>
          <View style={styles.estimatedTimeSection}>
            <Icon name="clock-outline" style={styles.estimatedTimeIcon} />
            <Text style={styles.estimatedTimeText}>3 mins</Text>
          </View>
        </View>
        <Image source={require(TEST_IMAGE)} style={styles.productImage} />
        <View style={styles.progressSection}>
          <Text style={styles.productName}>Nivea</Text>
          <Text style={styles.progressText}>1/4</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductView;
