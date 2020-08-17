import React from "react";
import { useQuery, gql } from "@apollo/client";

import { GET_AUTHORS_QUERY } from "../queries/queries";
const AddBook = props => {
  const { data, loading, error } = useQuery(GET_AUTHORS_QUERY);

  const displayAuthors = () => {
    if (loading) return <option>loading authors...</option>;
    else if (error) return <h2>Error loading authors...</h2>;
    else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
