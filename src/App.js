import { useState } from 'react';

import './style.css'
import BookList from './components/BookList';
import BOOK_LIST from "./store/books.json";
import AddBook from './components/AddBook';
import Stats from './components/Stats';

const App = () => {
  const [bookList, setBookList] = useState(BOOK_LIST);

  const removeBook = (id) => {
    setBookList(prev => prev.filter(book=> book.id !== id));
  };

  const onReadBook = (id) => {
    const idx = bookList.findIndex(item => item.id === id);
    setBookList(prev => [
      ...prev.slice(0, idx),
      { ...bookList[idx], isRead: !prev[idx].isRead },
      ...prev.slice(idx + 1)
    ]);
  };

  const onAddNewBook = (book) => {
    setBookList(prev => [
      ...prev, 
      { 
        ...book, 
        id: prev.length ? Math.max(...prev.map(item => item.id)) + 1 : 1,
      },
    ]);
  };

  const onRemoveAll = (book) => {
    setBookList([]);
  };

  const statsData = {
    all: bookList.length,
    readBooks: bookList.filter(book => book.isRead).length,
    notReadBooks: bookList.filter(book => !book.isRead).length
  };

  return (
    <div className="app">
      <header className='bookbar-root'>
        <h1 className='bookbar-title'>BookList</h1>
      </header>
        <main>
          <AddBook onAddNewBook={onAddNewBook} />
        </main>
        <Stats {...statsData} onRemoveAll={onRemoveAll} />

      <BookList 
      data={bookList} 
      onRemoveBook={removeBook} 
      onReadBook={onReadBook}
      />
    </div>
  );
};

export default App;
