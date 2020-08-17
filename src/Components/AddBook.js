import React, { useState } from "react"

import { useQuery } from "@apollo/client"

import { GET_AUTHORS_QUERY } from "../queries/queries"

const AddBook = props => {
  const [bookName, setBookName] = useState("")
  const [genre, setGenre] = useState("")
  const [authorId, setAuthorId] = useState("")

  const { data, loading, error } = useQuery(GET_AUTHORS_QUERY)

  const displayAuthors = () => {
    if (loading) return <option>loading authors...</option>
    else if (error) return <h2>Error loading authors...</h2>
    else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
    }
  }
  const submitForm = e => {
    e.preventDefault()
  }
  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name</label>
        <input type="text" onChange={e => setBookName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook