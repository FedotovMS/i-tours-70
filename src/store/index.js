import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { toursReducer } from './tours/reducer';

const enhancer = devToolsEnhancer();

export const rootReducer = combineReducers({
	tours: toursReducer,
	theme: () => ({ theme: 'foo' }),
});

export const store = createStore(rootReducer, enhancer);
