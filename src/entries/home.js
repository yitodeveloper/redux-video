import React from 'react' // Permite crear componentes
import {render} from 'react-dom' // Permite agregar los componentes en algún lugar
import Home from '../pages/containers/home.jsx'
import data from '../api.json'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../reducers/data.js'

const initialState = {
    data: {
        ...data,
        search: []
    }
}


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const app = document.getElementById('home-container') // Se trae el elemento donde se va a renderizar

render(
    <Provider store={store}>
        <Home/>
    </Provider>
,app)
