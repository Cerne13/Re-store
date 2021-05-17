import React from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';
import { Homepage, BookPage, CartPage } from '../pages';
import ShopHeader from '../../ShopHeader/ShopHeader';
import { connect } from 'react-redux';

const App = ({ numItems, total }) => {
	return (
		<main role='main' className='container'>
			<ShopHeader numItems={numItems} total={total} />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/books' component={BookPage} />
				<Route path='/cart' component={CartPage} />
			</Switch>
		</main>
	);
};

const mapStateToProps = ({
	shoppingCart: { orderTotal },
	shoppingCart: { cartItems },
}) => {
	return {
		numItems: cartItems.reduce(
			(totalQuantity, { count }) => totalQuantity + count,
			0
		),
		total: orderTotal,
	};
};

export default connect(mapStateToProps)(App);
