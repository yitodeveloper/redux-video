import data from './data.js'
import modal from './modal.js'
import isLoading from './is-loading.js'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
    data,
    modal, 
    isLoading
})

export default rootReducer;