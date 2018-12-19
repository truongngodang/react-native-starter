/**
 * Ngo Dang Truong
 * https://github.com/truongngodang
 * 9:24 PM - 12/14/2018
 * @flow
 */

import React, { Component } from 'react'
import {
  View
} from 'react-native'

import Button from '../../Components/Button'

// Styles
import styles from './LaunchScreen.style'

class LaunchScreen extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} />
      </View>
    )
  }
}

export default LaunchScreen
