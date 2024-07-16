


export const GET_TESTIMONIAL_QUERY = JSON.stringify({
	query: `
    {
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
});