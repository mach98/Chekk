import {StyleSheet} from 'react-native';
import {TextColor} from '../../constants/constants';

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
  button: {
    borderRadius: 7,
    backgroundColor: TextColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
