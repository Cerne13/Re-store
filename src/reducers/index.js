const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'A book with a name',
      count: 2,
      total: 120,
    },
    {
      id: 2,
      name: 'This book also has a name',
      count: 5,
      total: 800,
    },
  ],
  orderTotal: 9000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };

    case 'BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
