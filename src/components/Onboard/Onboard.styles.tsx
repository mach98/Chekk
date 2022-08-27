import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  getStartedText: {
    color: 'white',
  },
  loginText: {
    color: 'black',
  },
  btnView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  container: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: '10%',
    width: '100%',
    height: '70%',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  getStartedBtn: {
    borderRadius: 7,
    bottom: 0,
    width: 165,
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    backgroundColor: '#9ae69c',
    borderRadius: 7,
    width: 165,
    height: 60,
    borderColor: '#9ae69c',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    color: '#9ae69c',
  },
  linkTextTouch: {
    top: '30%',
  },
  textWriteup: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
    top: 0,
    position: 'absolute',
  },
});

export default styles;
