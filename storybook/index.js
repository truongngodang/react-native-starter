import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import './rn-addons'
import { loadStories } from './storyLoader'

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI()

// If you are using React Native vanilla and after installation you don't see your App name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('Starter', () => StorybookUI)

export { StorybookUI as default }
