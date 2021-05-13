import React from 'react';
import { Link } from 'react-router-dom';
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
	const { title, author, price, coverImage } = book;

	return (
		<div className='book-list-item'>
			<div className='book-cover'>
				<img src={coverImage} alt='book cover' />
			</div>
			<div className='book-details'>
				<Link to='/'>
					<span className='book-title'>{title}</span>
				</Link>
				<div className='book-author'>{author}</div>
				<div className='book-price'>{price}</div>
				<button
					className='btn btn-info add-to-cart'
					onClick={onAddedToCart}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default BookListItem;
