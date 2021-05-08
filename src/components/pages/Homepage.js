import React from 'react';
import ShoppingCartTable from '../../ShoppingCartTable/ShoppingCartTable';
import BookList from '../BookList/BookList';

const Homepage = () => {
	return (
		<>
			<BookList />
			<ShoppingCartTable />
		</>
	);
};

export default Homepage;
