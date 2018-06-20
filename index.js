//import { AppRegistry } from 'react-native';
//import App from './App';
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create components
const App = () => (
    <View style={{ flex: 1 }}>
    <Header headerText={'Album'} />
    <AlbumList />
    </View>
);
// Render it to the screen
AppRegistry.registerComponent('albums', () => App);

