import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  timerContainer: {
    flex: 1
  },
  timer: {
    flex: 3,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerText: {
    color: '#eeeeee',
    fontSize: 60
  },
  buttonsContainer: {
    flex:2,
    backgroundColor: '#555555',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttons: {
    width: 100,
    height: 100,
    backgroundColor: '#444444',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lapList: {
    flex: 1,
    backgroundColor: '#777777'
  },
  listView: {
    padding: 20
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#888888',
    padding: 5
  },
  listLapText: {
    width: 150,
    alignItems: 'center',
    fontSize: 20,
    color: '#444444'
  },
  listTimeText: {
    width: 75,
    alignItems: 'center',
    fontSize: 20,
    color: '#eeeeee'
  }
})

