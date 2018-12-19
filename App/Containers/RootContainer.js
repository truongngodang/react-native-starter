import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'

class RootContainer extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ReduxNavigation />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({

})

export default connect(null, mapDispatchToProps)(RootContainer)
