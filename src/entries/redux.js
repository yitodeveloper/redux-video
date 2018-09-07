import {createStore} from 'redux'

const $form = document.getElementById('form')


$form.addEventListener('submit',handleSubmit)


function handleSubmit(event){

    event.preventDefault()
    const data = new FormData($form)
    const title = data.get('title')
    console.log(title)
}



const initialState = [
    {
        "title": "Despacito"
    },
    {
        "title": "One more Time"
    },
    {
        "title": "hola 2"
    },
    
]

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)