import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BANNER_DATA } from '../../../graphql/queries';
import "./BannerComponent.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchQueryData } from '../../../graphql/fetchQueries';

function BannerComponent() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        centerMode: true
    }


    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
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
                    banner_title
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
                if (result) {
                    setBannerData(result.data.airbusList.items)
                }
            })
            .catch(err => console.error("API error", err))
    }, [])
    return (
        <div className="banner-content-wrapper">
            <Slider {...settings}>
                {bannerData && bannerData?.map((banner, index) => {
                    return (
                        <div className='banner-container' key={index}>
                            <img src={banner?.banner_image?._authorUrl} className="banner-image" alt="" width={"100%"} height={"400px"} />
                            <div className='banner-description'>
                                <span className='banner-title'>{banner?.banner_title}</span>
                                <span>{banner?.banner_description?.plaintext}</span>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default React.memo(BannerComponent)