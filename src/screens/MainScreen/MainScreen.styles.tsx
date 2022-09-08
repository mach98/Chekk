import {StyleSheet} from 'react-native';
import {TextColor} from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  profileBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileText: {
    fontSize: 20,
    color: TextColor,
    alignSelf: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 420,
    height: 300,
    resizeMode: 'contain',
    marginLeft: -30,
    marginTop: -40,
  },
  cardText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
    color: 'white',
  },
  coinImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: 70,
    marginLeft: 20,
  },
  pointsText: {
    position: 'absolute',
    marginTop: 75,
    marginLeft: 70,
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },
  redeemButton: {
    color: 'white',
    position: 'absolute',
    marginTop: 130,
    marginLeft: 20,
    backgroundColor: 'white',
    height: 40,
    width: 100,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeemButtonText: {
    fontWeight: '500',
    color: TextColor,
    fontSize: 13,
  },
});

export default styles;
