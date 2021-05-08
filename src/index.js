import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import BookstoreService from './services/BookstoreService';
import { BookstoreServiceProvider } from './components/BookstoreServiceContext';

import store from './store';

const bookStoreService = new BookstoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookStoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>,
	document.querySelector('#root')
);
