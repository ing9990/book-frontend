import React, { useEffect, useState } from 'react';
import BookItem from '../../BookItem';

function Home(props) {

  const [books,setBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8080/book")
      .then((res) => res.json())
      .then((res)=>{
        setBooks(res)
      })
  },[])


  return (
    <div>
      <h1>Book List</h1>
      <hr/>
      {books.map(book => <BookItem key={book.id} book={book} />)}
    </div>
  );
}

export default Home;