import React from 'react';
import BookList from './components/BookList';

const App = () => {
  return (
    <>
      <h1>LibraryChallenge</h1>
      <div id="books">
        <BookList />
      </div>
    </>
  );
}

export default App;