import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const initialBooks = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 3, title: 'Refactoring', author: 'Martin Fowler' }
];

function App() {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (book) => {
    setBooks(books);
  };

  return (
    <div className="app">
      <h1>ReadNest</h1>
      <p className="subtitle">Your personal reading list</p>
      <AddBookForm onAddBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;