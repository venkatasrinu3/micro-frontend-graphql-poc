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
          client_name,
          travel_data,
          service_id
        }
      }
    }
`

export const GET_SERVICE_NAME = gql`
  query GetByClientName($service_id:ID!) {
    indigoList {
      item(service_id:$service_id){
        client_name,
        travel_data,
        service_id
      }
    }
  }
`

export const GET_BANNER_DATA = gql`
  query{
    airbusList{
      items{
        banner_title,
        banner_description{
          plaintext
        },
        banner_image{
				... on ImageRef{
          _authorUrl
        }
      }
      }
    }
  }
`

export const GET_TESTIMONIAL_DATA = gql`
  query{
    airbusTestimonialsList{
      items{
        passengername,
        testimonial_title,
        testimonial_content{
           plaintext
        }
        testimonial_image{
          ... on ImageRef{
            _authorUrl
            _path
          }
        }
      }
    }
  }
`