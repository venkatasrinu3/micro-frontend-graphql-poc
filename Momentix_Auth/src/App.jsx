import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import MainContainer from "./MainContainer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/graphql_server";

const App = () => (
  <MainContainer />
);
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
)
export default App;