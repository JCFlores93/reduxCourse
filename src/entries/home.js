import React from 'react';
import { hydrate, render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
// console.log('Hola mundo!' )
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import reducer from '../reducers/data'
import reducer from '../reducers/index'
//import data from '../schemas/index' 
import { Map as map } from 'immutable'

/*function logger({ getState, dispatch }) {
    return (next) => {
        return (action) => {
            console.log('enviar esta action ', action)
            const value = next(action)
            console.log('nuevo estado ', getState().toJS())
            return value
        }
    }
}*/

const logger = ({ getState, dispatch }) => next => action => {
    console.log('antiguo estado ', getState().toJS())
    console.log('enviar esta action ', action)
    const value = next(action)
    console.log('nuevo estado ', getState().toJS())
    return value
}
//console.log(data)

/*const initialState = { 
    data: {
        //...data
        entities: data.entities,
        categories: data.result.categories,
        search: []
    },
    modal: {
        visibility: false,
        mediaId: null
    }
    
}*/

const store = createStore(
    reducer,
    map(),
    applyMiddleware(logger)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;


//hydrate( <Home data={data} />, homeContainer);
render(
    <Provider
        store={store}
    >
        <Home />
    </Provider>,
    homeContainer
)

