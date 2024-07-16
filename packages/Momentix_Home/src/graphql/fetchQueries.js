export const fetchQueryData = () => {
    let apiResponse;
    fetch("http://localhost:4502/content/_cq_graphql/global/endpoint.json", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            authorization: `Basic ${btoa(`admin:admin`)}`
        },
        body: JSON.stringify({
            query: `
            {
              airbusList{
                items{
                  banner_description{
                      plaintext
                  },
                  banner_image {
                    ... on ImageRef {
                        _authorUrl
                    }
                  }
                }
              }
            }
            `
        })
    })
        .then(res => res.json())
        .then(result => {
            if(result){
                apiResponse = result;
            }
            console.log("api response ===>", apiResponse, result)
        })
        .catch(err => console.error("API error", err))

    console.log(apiResponse)
    return apiResponse;
}