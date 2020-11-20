import React from 'react'
import ReactDOM from 'react-dom'
import Subs from './components/subs'
import { fetchAllSubs } from './util/api_util'
import { receiveAllSubs, requestAllSubs } from './actions/sub_actions';
import configureStore from './store/store'
import selectAllSubs from './reducers/selectors'

window.store = configureStore();
window.fetchAllSubs = fetchAllSubs;
window.receiveAllSubs = receiveAllSubs;
window.requestAllSubs = requestAllSubs;
window.dispatch = store.dispatch;
window.selectAllSubs = selectAllSubs;

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Subs store={store}/>, rootEl);
});