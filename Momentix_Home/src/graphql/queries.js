import { gql } from "@apollo/client";

export const GET_POST_DATA = gql`
query {
    posts {
        albumId,
        title,
        thumbnailUrl,
        url
    }
}
`

export const GET_AEM_DATA = gql`
    query {
      indigoList{
        items{
          client_name
        }
      }
    }
`

export const GET_SERVICE_NAME = gql`
  query {
    indiGoByPath
  }
`