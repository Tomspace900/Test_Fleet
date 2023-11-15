import React from 'react';
import ReactDOM from 'react-dom/client';
import './Global.css';
import App from './App';
import { MovieContextProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MovieContextProvider>
				<App />
			</MovieContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
