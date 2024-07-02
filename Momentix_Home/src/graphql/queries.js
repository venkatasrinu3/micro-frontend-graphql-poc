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