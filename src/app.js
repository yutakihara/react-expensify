import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters.';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // all browsers start at exact same styles
import './styles/style.scss';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));
const { expenses, filters } = store.getState();
console.log(getVisibleExpenses(expenses, filters));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
