/**
 * Ngo Dang Truong
 * https://github.com/truongngodang
 * 9:24 PM - 12/14/2018
 * @flow
 */

import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import Config from 'react-native-config'
import Icon from 'react-native-vector-icons/Ionicons'

// Styles
import styles from './HomeScreen.style'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            {Config.API_URL}
          </Text>
          <Icon name='ios-person' size={30} color='#4F8EF7' />
        </ScrollView>
      </View>
    )
  }
}

export default HomeScreen
