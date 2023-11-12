import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//Import dependencies from react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Import dependencies for react-redux
import { Provider } from 'react-redux'; //expose the store to the app
import store, { history } from './store';
import App from './components/App';

//Router of the app
const router = (
    <Provider store={store}>
    <Router history={history}>
    {/* <Router history={browserHistory}> */}
        {/* <Route path='/' component={Main}> */}
        <Route path='/' component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
        </Route>
    </Router>

    </Provider>
)

//Bring all the information of the store in console : $r.store.getState() 

// render(<p>Hi</p>, document.getElementById("root"));
// render(<Main />, document.getElementById("root"));
render(router, document.getElementById('root'));
