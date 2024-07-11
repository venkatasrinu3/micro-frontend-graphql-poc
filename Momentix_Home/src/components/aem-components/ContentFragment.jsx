import { useQuery } from "@apollo/client"
import { GET_AEM_DATA } from "../../graphql/queries"
import React, { useEffect, useState } from "react";
const AemContent = () => {
    const { loading, error, data } = useQuery(GET_AEM_DATA)
    const [aemContent, setAemContent] = useState([]);
    useEffect(() => {
        setAemContent(data?.indigoList?.items)
    }, [data])
    console.log("this is the data from AEM content", aemContent, data)
    return (
        <div style={{ color: "black" }}>
            <h4 >List of services</h4>
            <ul>
                {aemContent?.map((ele, index) => {
                    return (
                        <li key={index} style={{ cursor: "pointer" }}>
                            {ele.client_name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AemContent