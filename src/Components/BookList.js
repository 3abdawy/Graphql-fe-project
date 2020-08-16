import React, { Component } from "react";
import { gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="books-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
