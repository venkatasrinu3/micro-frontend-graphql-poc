import React, { useEffect } from 'react'
import BannerComponent from './banner-component/BannerComponent'
import TestimonialComponent from './testimonial-content/TestimonialComponent'
import "./Dashboard.scss";
// import Skeleton from "@react-monorepo/design-system/src/utils/skeleton/SkeletonComponent"

const DashboardPage = () => {
    useEffect(() => {
        console.log("Hello")
    }, [])
    return (
        <div className='dashboard-wrapper' >
            <h1>Dashboard</h1>
            <BannerComponent />
            <TestimonialComponent />
            {/* <Skeleton/> */}
        </div>
    )
}

export default DashboardPage