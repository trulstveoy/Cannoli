import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { homeReducer } from './modules/home';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  home: homeReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
