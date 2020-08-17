import React, { useState } from "react"

import { useQuery } from "@apollo/client"

import { GET_BOOKS_QUERY } from "../queries/queries"
import BookDetails from "./BookDetails"

const BookList = props => {
  const [selectedBook, setSelectedBook] = useState(null)

  const { data, loading, error } = useQuery(GET_BOOKS_QUERY)

  if (loading) return <h2>loading books...</h2>

  if (error) return <h2>Error...</h2>

  if (data)
    return (
      <div>
        <ul id="books-list">
          {data.books.map(book => (
            <li key={book.id} onClick={e => {setSelectedBook(book.id)}}>
              Book Name : {book.name}
            </li>
          ))}
        </ul>
        <BookDetails bookId = {selectedBook}/>
      </div>
    )
}

export default BookList
