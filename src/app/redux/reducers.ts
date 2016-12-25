import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { homeReducer } from './modules/home';
import { gameReducer } from './modules/game';
import { formReducer } from './modules/form';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  home: homeReducer,
  game: gameReducer,  
  form: formReducer,  
  reduxAsyncConnect: reducer,
});

export default rootReducer;
