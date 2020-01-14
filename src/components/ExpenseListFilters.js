import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, SortByAmount, SortByDate } from '../actions/filters.';

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            defaultValue={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(SortByDate())
                } else if (e.target.value === 'amount') {
                    props.dispatch(SortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);