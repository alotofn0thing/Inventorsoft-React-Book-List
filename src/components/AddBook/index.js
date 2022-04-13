import { useState } from 'react';
import './style.css';

const AddBook = ({ onAddNewBook }) => {
	const [book, setBook] = useState({
		isRead: false,
		title: '',
	});

	return (
		<form
			className='add-book-root'
			onSubmit={e => {
				e.preventDefault();
				if (book.title.length) {
					onAddNewBook(book);
					setBook({
						isRead: false,
						title: '',
					});
				}
			}}
		>
			<input
				type='text'
				className='add-book-input'
				placeholder='Title of book'
				value={book.title}
				onChange={e => {
					setBook(prev => ({ ...prev, title: e.target.value }));
				}}
			/>
			<div className='add-book-button-root'>
				<button className='add-book-button' type='submit'>
					+
				</button>
			</div>
		</form>
	);
};

export default AddBook;
