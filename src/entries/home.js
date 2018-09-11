import React from 'react' // Permite crear componentes
import {render} from 'react-dom' // Permite agregar los componentes en algún lugar
import Home from '../pages/containers/home.jsx'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/index.js'
import {Map as map} from 'immutable'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

function logger({getState, dispatch}){
    return (next) => {
        return (action)=>{
            console.log('Este es el viejo estado', getState().toJS())
            console.log('Enviando acción ', action)
            const value = next(action)
            console.log('Este es el nuevo estado', getState().toJS())
            return value
        }
    }
}

const store = createStore(
    reducer,
    map(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
)


const app = document.getElementById('home-container') // Se trae el elemento donde se va a renderizar

render(
    <Provider store={store}>
        <Home/>
    </Provider>
,app)
