import React from 'react';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// CSS Import
import './index.css'; // Main StyleSheet
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
