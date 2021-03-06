// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <Header headerText="Albums!" />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
