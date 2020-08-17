import React from "react"

import { useQuery } from "@apollo/client"

import { GET_BOOKS_QUERY } from "../queries/queries"

const BookDetails = props => {
  const { data, loading, error } = useQuery(GET_BOOKS_QUERY)

  if (loading) return <h2>loading books...</h2>

  if (error) return <h2>Error...</h2>

  if (data)
    return (
      <div id="book-details">
        <p>Output book details here</p>
      </div>
    )
}

export default BookDetails
