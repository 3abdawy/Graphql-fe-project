import React from "react";
import { ApolloClient, ApolloProvider ,InMemoryCache} from "@apollo/client";

import BookList from "./Components/BookList";

//Apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Abdawy Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
