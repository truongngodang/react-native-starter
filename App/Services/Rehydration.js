import ReduxPersist from '../Config/ReduxPersist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      AsyncStorage.setItem('reducerVersion', reducerVersion)
      persistStore(store, null).purge()
    }
    persistStore(store, null)
  }).catch(() => {
    persistStore(store, null)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default { updateReducers }
