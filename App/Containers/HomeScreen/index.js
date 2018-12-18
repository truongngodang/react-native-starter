/**
 * Ngo Dang Truong
 * https://github.com/truongngodang
 * 9:24 PM - 12/14/2018
 * @flow
 */

import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../../Components/Button'

// Styles
import styles from './HomeScreen.style';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Follow the steps below:

            If you use one of the native navigation libraries (e.g. wix/react-native-navigation), you should follow this separate guide to get gesture handler library set up on Android. Ignore the rest of this step – it only applies to RN apps that use a standard Android project layout.

            Update your MainActivity.java file (or wherever you create an instance of ReactActivityDelegate), so that it overrides the method responsible for creating ReactRootView instance and then use the root view wrapper provided by this library. Do not forget to import ReactActivityDelegate, ReactRootView, and RNGestureHandlerEnabledRootView:
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
