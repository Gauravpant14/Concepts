import { createStore, applyMiddleware } from 'redux'
// import { countReducer } from './../reducers/userReducer'
import { apiReducer } from './../reducers/apiReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore( apiReducer ,composeWithDevTools(applyMiddleware(thunk)) ) 


export default store