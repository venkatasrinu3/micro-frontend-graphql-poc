import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RouteContainer from "./MainContainer.jsx";
import { ApolloProvider, useQuery } from "@apollo/client";
import client from "./graphql/graphql_server.js";
import { GET_AEM_DATA } from "./graphql/queries.js";


const App = ({ handleLogout }) => {
  const { loading, error, data } = useQuery(GET_AEM_DATA)
  // alert("hi")
  // useEffect(()=>{
  //   fetch("http://localhost:4502/content/_cq_graphql/global/endpoint/", {
  //     "method": "POST",
  //     "headers": { "content-type": "application/json" },
  //     "body": JSON.stringify({
  //       query: `
  //       {
  //         indigoList {
  //           items {
  //             client_name
  //           }
  //         }
  //       }
  //       `
  //     })
  //   }).then(res => res.json()).then(console.log)
  // },[])
  return (
    <RouteContainer handleLogout={handleLogout} />
  )
};
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)
export default App
