import {StyleSheet} from 'react-native';

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

export default styles;
