import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

import './index.css';


const INCREMENT = "INCREMENT";

/**
 * Reducer
 */
const initialState = {
	value: 0
};
const counterReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case INCREMENT:
			return Object.assign( {}, state, {
				value: state.value + action.addBy
			} );
		break;
		default:
			return state;
		break;
	}
};

/**
 * Store
 */
const store = createStore( counterReducer );


/**
 * DOM Render
 */
const render = () => {
	ReactDOM.render(
		<App store={ store } />,
		document.getElementById( 'root' )
	);
};

store.subscribe( render );
render();
