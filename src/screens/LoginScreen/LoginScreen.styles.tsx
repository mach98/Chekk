import {StyleSheet} from 'react-native';
import {TextColor} from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  screenHeader: {
    fontSize: 20,
    color: TextColor,
  },
  loginInputs: {
    marginVertical: 10,
  },
  loginButton: {
    borderRadius: 7,
    backgroundColor: TextColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
  },
  rememberMe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    fontSize: 12,
  },
  troubleLogin: {
    fontSize: 12,
    color: TextColor,
    textDecorationLine: 'underline',
  },
  redirectToRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  signUp: {
    color: TextColor,
  },
});

export default styles;
