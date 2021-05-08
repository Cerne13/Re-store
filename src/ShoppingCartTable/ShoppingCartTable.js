import React from 'react';
import './ShoppingCartTable.css';

const ShoppingCartTable = () => {
	return (
		<div className='shopping-cart-table'>
			<h2>Your order:</h2>

			<table className='table'>
				<thead>
					<thead>#</thead>
					<th>Item</th>
					<th>Count</th>
					<th>Price</th>
					<th>Action</th>
				</thead>
				<tbody>
					<td>1</td>
					<td>Name of the book</td>
					<td>2</td>
					<td>$40</td>
					<td className='table-actions'>
						<button className='btn btn-outline-danger btn-sm float-right'>
							<i className='fa fa-trash-o' />
						</button>
						<button className='btn btn-outline-success btn-sm float-right'>
							<i className='fa fa-plus-circle' />
						</button>
						<button className='btn btn-outline-warning btn-sm float-right'>
							<i className='fa fa-minus-circle' />
						</button>
					</td>
				</tbody>
			</table>

			<div className='total'>Total: $404</div>
		</div>
	);
};

export default ShoppingCartTable;
