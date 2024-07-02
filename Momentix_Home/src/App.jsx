import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RouteContainer from "./MainContainer.jsx";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/graphql_server.js";

const App = () => (
  <RouteContainer />
);
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)
export default App
