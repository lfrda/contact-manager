import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';

export default class Contacts extends React.Component {
  static navigationOptions = {
    title: 'Contacts'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin', phone: '555-5555'},
            {key: 'Jackson', phone: '555-5555'},
            {key: 'James', phone: '555-5555'},
            {key: 'Joel', phone: '555-5555'},
            {key: 'John', phone: '555-5555'},
            {key: 'Jillian', phone: '555-5555'},
            {key: 'Jimmy', phone: '555-5555'},
            {key: 'Julie', phone: '555-5555'},
          ]}
          renderItem={({item}) => 
            <ScrollView contentContainerStyle={styles.listContainer}>
              <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => navigate('EditContact')}
              >
                <Text style={styles.item}>{item.key}</Text>
                <Text style={styles.item}>{' - '}</Text>
                <Text style={styles.item}>{item.phone}</Text>
              </TouchableOpacity>
            </ScrollView>
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    
    alignItems: 'flex-start',
    backgroundColor: '#fff',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 500,
    height: 40,
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: 'white',
    borderBottomWidth: .5,
  },
  item: {
    paddingTop: 20,
    paddingLeft: 10,
    color: '#7f8c8d',
    fontWeight: '600',
    borderRightWidth: .3,
    borderRightColor: 'black'

  }
});
