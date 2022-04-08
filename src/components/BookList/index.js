import './style.css';
import BookItem from '../BookItem';

const BookList = (props) => {
  return (
    <ul className='book-list'>
      {props.data.length ? (
        props.data.map((book, idx) => {
        return (
            <BookItem
             key={book.id} 
             item={book} 
             count={idx + 1} 
             onRemoveBook={props.onRemoveBook}
             onReadBook={props.onReadBook}
            />
           );
          })
      ) : (
        <h1>There is no data</h1>
      )}
    </ul>
  );
};

export default BookList;