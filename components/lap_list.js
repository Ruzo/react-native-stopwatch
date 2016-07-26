import React, {Component} from 'react';
import moment from 'moment';
import styles from '../styles';
import {
  Text,
  View,
  ListView,
  RecyclerViewBackedScrollView
} from 'react-native';

const LapList = (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
  return (
    <View style={styles.lapList}>
      <ListView
        dataSource={ds.cloneWithRows(props.laps)}
        renderRow={(rowData, sectionId, rowId) => (
          <View style={styles.listRow}>
            <Text style={styles.listLapText}>Lap {Number.parseInt(rowId) + 1}</Text>
            <Text style={styles.listTimeText}>{moment(rowData).format('mm:ss:SS')}</Text>
          </View>
          )}
        enableEmptySections={true}
        contentContainerStyle={styles.listView}
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
       />
    </View>
  );
}

export default LapList;