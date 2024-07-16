import React from "react";
import "./SkeletonComponent.scss"
const SkeletonComponent = () => {
    return (
        <div className="skeleton-loader">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
        </div>
    )
}

export default SkeletonComponent