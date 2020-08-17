import { gql } from "@apollo/client";

export const GET_AUTHORS_QUERY = gql`
  query getAuthorsQuery {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOKS_QUERY = gql`
  query getBooksQuery {
    books {
      name
      genre
      id
    }
  }
`;