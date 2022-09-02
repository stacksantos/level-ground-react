import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<HashRouter>
		<Routes>
			<Route path='/' element={<App />} />
		</Routes>
	</HashRouter>
);
