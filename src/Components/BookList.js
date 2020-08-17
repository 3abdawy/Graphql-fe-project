import React from "react";

import { useQuery,gql } from "@apollo/client";

import {GET_BOOKS_QUERY} from '../queries/queries';

const BookList = props => {
  const { data, loading, error } = useQuery(GET_BOOKS_QUERY);
  
  if (loading) return <h2>loading books...</h2>
  
  if(error) return <h2>Error...</h2>
  
  if (data) 
  return (
    <div>
      <ul id="books-list">
        {data.books.map(book => (
          <li key={book.id}>Book Name : {book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
