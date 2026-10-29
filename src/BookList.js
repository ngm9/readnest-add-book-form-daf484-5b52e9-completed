import React from 'react';

function BookList({ books }) {
  if (books.length === 0) {
    return <p className="empty">No books on your list yet.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-card">
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author}</span>
        </li>
      ))}
    </ul>
  );
}

export default BookList;