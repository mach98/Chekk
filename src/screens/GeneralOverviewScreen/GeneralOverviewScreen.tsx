import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons1 from 'react-native-vector-icons/MaterialIcons';
import Icons2 from 'react-native-vector-icons/Ionicons';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const COIN_LOGO = '../assets/images/coin.png';
const CARD_BACKGROUND = '../assets/images/home.png';

const GeneralOverviewScreen: FC<IProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pointsCard}>
        <Image
          source={require(CARD_BACKGROUND)}
          style={{
            borderRadius: 15,
            height: '100%',
            width: '100%',
            zIndex: 1,
            marginHorizontal: -23,
          }}
        />
        {/* <Image
          source={require(CARD_BACKGROUND)}
          style={{
            borderRadius: 15,
            resizeMode: 'contain',
            width: '100%',
            height: undefined,
            aspectRatio: 1,
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <Text>Your total points</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={require(COIN_LOGO)} style={{width: 50, height: 50}} />
          <Text style={styles.coinText}>5000</Text>
        </View> */}
      </View>

      <View style={styles.insights}>
        <Text>Your Insights</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.insightsCard}>
            <View style={{alignItems: 'center'}}>
              <Icon name="credit-card-scan-outline" size={20} color="#01173b" />
              <Text style={styles.cardText}>Total Scans</Text>
              <Text>80</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightsCard}>
            <View style={{alignItems: 'center'}}>
              <Icon name="file-document-outline" size={20} color="#01173b" />
              <Text style={styles.cardText}>Reports</Text>
              <Text>20</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightsCard}>
            <View style={{alignItems: 'center'}}>
              <Icons1 name="verified-user" size={20} color="#01173b" />
              <Text style={styles.cardText}>Verfied</Text>
              <Text>20</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightsCard}>
            <View style={{alignItems: 'center'}}>
              <Icons2 name="warning" size={20} color="#dbd114" />
              <Text style={styles.cardText}>Counterfeits</Text>
              <Text>20</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightsCard}>
            <View style={{alignItems: 'center'}}>
              <Icons2 name="checkbox" size={20} color="#4bbf58" />
              <Text style={styles.cardText}>Resolved</Text>
              <Text>20</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightsCard}>
            <View style={{alignItems: 'center'}}>
              <Icons2 name="calendar" size={20} color="#01173b" />
              <Text style={styles.cardText}>Expired</Text>
              <Text>20</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  pointsCard: {
    height: '30%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  insights: {
    marginTop: 7,
    height: '68%',
    padding: 10,
  },
  coinText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    marginHorizontal: 5,
  },
  insightsCard: {
    backgroundColor: '#f2f0e9',
    height: '25%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 7,
  },
  cardText: {
    color: 'black',
  },
});

export default GeneralOverviewScreen;
