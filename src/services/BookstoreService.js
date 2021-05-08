export default class BookstoreService {
	data = [
		{
			id: 1,
			title: 'Googling for Regex',
			author: 'Unknown',
			price: 150,
			coverImage: 'https://boyter.org/static/books/Cn1rWcbWcAAgsCA.jpg',
		},
		{
			id: 2,
			title: 'Coding on the Weekend',
			author: 'Noname',
			price: 35,
			coverImage: 'https://boyter.org/static/books/Cg0x8vnXEAEB2Le.jpg',
		},
	];

	getBooks() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(this.data);
			}, 700);
		});
	}
}
