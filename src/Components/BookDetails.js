import React from "react"

import { useQuery } from "@apollo/client"

import { GET_BOOK_QUERY } from "../queries/queries"
const BookDetails = props => {
  const { data, loading,error } = useQuery(GET_BOOK_QUERY, {
    variables: {
      id: props.bookId
    },
    skip: props.bookId === null
  })

  const displayBookDetails = () => {
      if(loading) return<p>Loading ...</p>
      if(error) return<p>Error ...</p>
      if(data) return(
      <div>
            <h2>Name : {data.book.name}</h2>
            <p>genre : {data.book.genre}</p>
            <p>Author: {data.book.author.name}</p>
            <p>All Books by this author</p>
            <ul className="other-books">
                {data.book.author.books.map(book => {
                    return <li key={book.id}>{book.name}</li>
                })
                    
                }
            </ul>
      </div>)
      else
      return<p>just click on a book</p>
  }
  return (
    <div id="book-details">
      <p>book details go here</p>
      {displayBookDetails()}
    </div>
  )
}

export default BookDetails
