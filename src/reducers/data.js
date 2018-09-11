import { fromJS } from 'immutable'
import schema from '../schemas/index.js'
import {SEARCH_ENTITIES} from '../action-types/index.js'

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: ''
})

function data(state = initialState, action){
    
    switch(action.type){
        case SEARCH_ENTITIES:{
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data;