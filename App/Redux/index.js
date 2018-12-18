import {combineReducers} from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./').reducers);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
