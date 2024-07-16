import { Avatar, Card, CardContent, CardHeader, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Testimonial.scss";
// import { useQuery } from '@apollo/client';
// import { GET_TESTIMONIAL_DATA } from '../../../graphql/queries';

function TestimonialComponent() {
  // const { loading, error, data } = useQuery(GET_TESTIMONIAL_DATA);
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch("http://localhost:4502/content/_cq_graphql/global/endpoint.json", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        authorization: `Basic ${btoa(`admin:admin`)}`
      },
      body: JSON.stringify({
        query:`
        {
          airbusTestimonialsList{
            items{
              passengername,
              testimonial_title,
              testimonial_content{
                plaintext
              }
              testimonial_image{
              ...on ImageRef{
                _authorUrl
                _path
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
    if (result) {
      setTestimonials(result.data.airbusTestimonialsList.items)
    }
  })
  .catch(err => console.error("API error", err))
  }, [])
return (
  <div className="testimonial-wrapper">
    <h3 style={{ width: "100%" }}>Here us from our Satisfied Customers</h3>
    {testimonials && testimonials?.map((ele, i) => {
      return (
        <Card className='testimonial-cards' key={i}>
          <CardHeader
            className='card-header'
            avatar={
              <Avatar sx={{ bgcolor: "rgba(0,134,0,0.2)" }} aria-label="recipe">
                {ele.passengername[0]}
              </Avatar>
            }
            title={ele.passengername}
            titleTypographyProps={{
              fontSize: "20px"
            }}
            subheader={ele.testimonial_title}
          />
          <Divider />
          <CardContent className='card-content'>
            <img className='card-image' src={`${ele?.testimonial_image?._authorUrl}`} alt="test-image" width="100%" height="100%" />
            <span>
              {ele.testimonial_content.plaintext}
            </span>
          </CardContent>
        </Card>
      )
    })}
  </div>
)
}

export default TestimonialComponent