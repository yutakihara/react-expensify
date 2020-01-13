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

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const { expenses, filters } = store.getState();
console.log(getVisibleExpenses(expenses, filters));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
