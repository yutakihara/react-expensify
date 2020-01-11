const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => { // pure functions no dependencies
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, // copying properties
                        ...action.updates // updating properties
                    }
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
};
