import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Contacts from './Contacts';
import EditContact from './EditContact';


export default StackNavigator({
  Contacts: { screen: Contacts },
  EditContact: { screen: EditContact}
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
