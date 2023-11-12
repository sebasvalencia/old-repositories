import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//importamos createStore el componente q nos permite crear store
import {createStore} from 'redux';

//nos permite conectarnos al store con los componentes
import {Provider} from 'react-redux';

import reducer from './reducers';

//declarar la tienda
const store = createStore(reducer);

//Entre Provider y con el argumento store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
