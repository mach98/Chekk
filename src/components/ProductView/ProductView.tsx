import React, {FC} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import IProductView from './ProductView.interface';

import styles from './ProductView.styles';

const ProductView: FC<IProductView> = ({
  rewardType,
  estimatedTime,
  productImage,
  answeredQuestions,
  TotalQuestions,
  productName,
}) => {
  return (
    <TouchableOpacity>
      <View>
        <View></View>
        <Text>Product</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductView;
