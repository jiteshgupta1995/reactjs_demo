import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log('store', store.getState()));
// store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
	<App />
	</Provider>,
    document.getElementById('root')
);
registerServiceWorker();