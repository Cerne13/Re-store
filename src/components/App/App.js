import React from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';
import { Homepage, BookPage, CartPage } from '../pages';
import ShopHeader from '../../ShopHeader/ShopHeader';

const App = () => {
	return (
		<main role='main' className='container'>
			<ShopHeader numItems={5} total={200} />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/books' component={BookPage} />
				<Route path='/cart' component={CartPage} />
			</Switch>
		</main>
	);
};

export default App;
