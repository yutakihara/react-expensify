import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css'; // all browsers start at exact same styles
import './styles/style.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
