
import { combineReducers,createStore,applyMiddleware } from 'redux';
import userReducer from './reducer/userReducer';
import thunk from 'redux-thunk';
import gameReducer from './reducer/gameReducer';

// import { createContext, useContext } from 'react';

const reducers = combineReducers({user: userReducer, game: gameReducer})

// export const store = createStore(reducers)
const middleware = [thunk]
const initalState ={}
export const store = createStore(reducers, initalState, applyMiddleware(...middleware))
// export const StoreContext = createContext(store);

// export function useStore() {
//     // return useContext(StoreContext);
// }