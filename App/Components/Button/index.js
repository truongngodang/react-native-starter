import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

class Button extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={{ color: this.props.color }}>Button</Text>
      </TouchableOpacity>
    )
  }
}

export default Button
