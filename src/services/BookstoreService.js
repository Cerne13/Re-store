export default class BookstoreService {
	data = [
		{
			id: 1,
			title: 'Googling for Regex',
			author: 'Unknown',
			price: 150,
			coverImage:
				'https://i.pinimg.com/originals/80/17/0c/80170c11996bd58e422dbb6631b73c4b.jpg',
		},
		{
			id: 2,
			title: 'Coding on the Weekend',
			author: 'Noname',
			price: 35,
			coverImage:
				'https://i.pinimg.com/originals/b5/25/01/b525010ecf838284ff4828270642b8c3.jpg',
		},
	];

	getBooks() {
		return new Promise((res, rej) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					rej(new Error('error happened'));
				} else {
					res(this.data);
				}
			}, 700);
		});
	}
}
