import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_AUTHORS_QUERY = gql`
  query getAuthorsQuery {
    authors {
      name
      id
    }
  }
`;

const AddBook = props => {
  const { data, loading, error } = useQuery(GET_AUTHORS_QUERY);

  if (loading) return <h2>loading authors...</h2>;

  if (error) return <h2>Error...</h2>;

  if (data)
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
          </select>
        </div>
        <button>+</button>
      </form>
    );
};

export default AddBook;
