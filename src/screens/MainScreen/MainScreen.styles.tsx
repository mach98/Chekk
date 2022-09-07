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
});

export default styles;
