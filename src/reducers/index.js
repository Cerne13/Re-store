import updateBooklist from './bookList';
import updateShoppingCart from './shoppingCart';

const reducer = (state, action) => {
	return {
		bookList: updateBooklist(state, action),
		shoppingCart: updateShoppingCart(state, action),
	};
};

export default reducer;
