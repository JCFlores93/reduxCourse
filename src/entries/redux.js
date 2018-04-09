import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);
}

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.dispatch({
    //lo único requerido es 
    type: 'ADD_SONG',
    payload: {
        title
    }
})


const initialState = [
    {
        "title": "Despacito",
    },
    {
        "title": "One more time",
    },
    {
        "title": "Echame la culpa",
    }
]


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload]
        default:
            return state
    }
}



const $container = document.getElementById('playlist')
const playlist = store.getState()
playlist.forEach(element => {
    const template = document.createElement('p')
    template.textContent = element.title
    $container.appendChild(template)
});



console.log(store.getState())