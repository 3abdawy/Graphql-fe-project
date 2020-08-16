import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

const GET_BOOKS_QUERY = gql`
  query getBooksQuery {
    books {
      name
      genre
    }
  }
`;

const BookList = props => {
  const { data, loading, error } = useQuery(GET_BOOKS_QUERY);
  if (loading) return <h1>loading</h1>;
  if (data)
  console.log(data)
    return (
      <div>
        <ul id="books-list">
          <li>Book name</li>
        </ul>
      </div>
    );
};

export default BookList;
