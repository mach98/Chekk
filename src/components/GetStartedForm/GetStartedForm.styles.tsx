import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  headerTextContainer: {
    marginBottom: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
  },
  inputsContainer: {
    justifyContent: 'space-evenly',
  },
  inputs: {
    marginVertical: 5,
  },
  signUpButton: {
    borderRadius: 7,
    backgroundColor: '#181f45',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: 'white',
  },
  loginLink: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  loginLinkText: {
    color: '#181f45',
  },
});

export default styles;
