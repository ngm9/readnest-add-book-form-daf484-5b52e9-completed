import React, { useState } from 'react';

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBook({ title, author });
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <h2>Add a book</h2>
      <div className="fields">
        <input
          className="field"
          type="text"
          placeholder="Title"
        />
        <input
          className="field"
          type="text"
          placeholder="Author"
        />
        <button type="submit" className="add-btn">Add</button>
      </div>
    </form>
  );
}

export default AddBookForm;