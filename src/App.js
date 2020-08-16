import React from "react";
import { ApolloClient, ApolloProvider ,InMemoryCache, useQuery,gql} from "@apollo/client";

import BookList from "./Components/BookList";

//Apollo client setup




function App() {
//  const {data,loading,error}= useQuery(GET_BOOKS_QUERY)
//  if(loading) return <h1>Loading</h1> 
 return (
    
      <div id="main">
        <h1>Abdawy Reading List</h1>
        <BookList />
      </div>
  );
}

export default App;
