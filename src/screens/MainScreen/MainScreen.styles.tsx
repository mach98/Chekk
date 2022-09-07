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
  },
});

export default styles;
