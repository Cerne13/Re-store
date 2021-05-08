import React from 'react';

import './ShopHeader.css';

const ShopHeader = ({ numItems, total }) => {
	return (
		<header className='shop-header row'>
			<a href='#' className='logo text-dark'>
				ReStore
			</a>
			<a href='#' className='shopping-cart'>
				<i className='cart-icon fa fa-shopping-cart'></i>
				{numItems} items (${total})
			</a>
		</header>
	);
};

export default ShopHeader;
