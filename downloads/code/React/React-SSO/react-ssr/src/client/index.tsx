import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import App from '../shared/App';
import {createClientStore} from '../shared/store'
import {Provider} from "react-redux";

ReactDOM.render((
    <Provider store={createClientStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))