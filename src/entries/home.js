import React from 'react' // Permite crear componentes
import {render} from 'react-dom' // Permite agregar los componentes en algún lugar
import Home from '../pages/containers/home.jsx'
import data from '../api.json'

const app = document.getElementById('home-container') // Se trae el elemento donde se va a renderizar

render(
    <Home data={data}/>
,app)
