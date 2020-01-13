import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer, // key: value = state property : action handler
        filters: filtersReducer
    }));
    return store;
};