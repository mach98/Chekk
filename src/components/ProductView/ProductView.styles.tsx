import {StyleSheet} from 'react-native';
import {TextColor} from '../../constants/constants';

const TEXTCOLOR = 'black';

const styles = StyleSheet.create({
  card: {
    borderRadius: 9,
    width: '50%',
    paddingLeft: 4,
    backgroundColor: '#e6ebeb',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estimatedTimeSection: {
    flexDirection: 'row',
    padding: 4,
    borderBottomLeftRadius: 9,
    backgroundColor: '#a6f4f5',
    borderTopRightRadius: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  estimatedTimeText: {
    color: TextColor,
    fontSize: 14,
  },
  estimatedTimeIcon: {
    fontSize: 15,
    color: TextColor,
    padding: 3,
  },
  productImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    paddingRight: 10,
    paddingLeft: 5,
  },
  productName: {
    fontWeight: '500',
    color: TEXTCOLOR,
  },
  progressText: {
    color: TEXTCOLOR,
  },
});

export default styles;
