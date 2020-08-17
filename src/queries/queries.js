import { gql } from "@apollo/client"

export const GET_AUTHORS_QUERY = gql`
  query getAuthorsQuery {
    authors {
      name
      id
    }
  }
`

export const GET_BOOKS_QUERY = gql`
  query getBooksQuery {
    books {
      name
      genre
      id
    }
  }
`
export const ADD_BOOK_MUTATION = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`
