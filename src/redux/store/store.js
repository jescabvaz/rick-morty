// importing libraries
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import rootReducer from '../reducers'; 

// creating the redux store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);
export default store

// import { configureStore } from '@reduxjs/toolkit'
// import characterSlice from '../characterSlice'; 


// const store = configureStore({
//   reducer:{
//     character: characterSlice,
//   }
// });


// export default store