import {StyleSheet, Dimensions} from 'react-native';
import {TextColor} from '../../constants/constants';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 70,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalHeader: {
    alignSelf: 'center',
  },
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
    width: '70%',
    alignSelf: 'center',
  },
  modalText: {
    padding: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
