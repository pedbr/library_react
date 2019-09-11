import React from "react";

const BookList = () => {
  const bookList = [
    {
      id: 1,
      title: "Bamse i skogen",
      author: "konrad",
      available: true,
      return_date: ""
    },
    {
      id: 2,
      title: "tjabba",
      author: "tjena",
      available: false,
      return_date: "14th of September"
    }
  ];

  let bookListDisplay = bookList.map(book => {
    if (book.available) {
      return (
        <div key={book.id} id={`book_${book.id}`}>
          <h1 className="title">{book.title}</h1>
          <h2 className="author">{book.author}</h2>
          <p className="return_date">{book.return_date}</p>
        </div>
      );
    }
  });

  return (
    <div id="books">
      Display title and author
      {bookListDisplay}
    </div>
  );
};

export default BookList;
