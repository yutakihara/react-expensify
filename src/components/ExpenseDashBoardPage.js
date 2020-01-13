import React from 'react';
import ExpenseList from './ExpenseList';
import ExpneseListFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;