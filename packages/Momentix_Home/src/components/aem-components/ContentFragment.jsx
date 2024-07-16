import { useQuery } from "@apollo/client"
import { GET_AEM_DATA, GET_SERVICE_NAME } from "../../graphql/queries"
import React, { useEffect, useState } from "react";
const AemContent = () => {
    const { loading, error, data } = useQuery(GET_AEM_DATA)
    const [aemContent, setAemContent] = useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    useEffect(() => {
        setAemContent(data?.indigoList?.items)
    }, [data])
    console.log("this is the data from AEM content", aemContent, data)
    const { isLoading, err, data:info } = useQuery(GET_SERVICE_NAME,{variables:{selectedServiceId}})
    const chooseDetails = (element) => {
        setSelectedServiceId(element.service_id)
    }
    useEffect(() => {
        console.log("This is the selected service Id", selectedServiceId)
    }, [selectedServiceId])
    return (
        <div style={{ color: "black" }}>
            <h4 >List of services</h4>
            <ul>
                {aemContent?.map((ele) => {
                    return (
                        <li key={ele?.service_id} style={{ cursor: "pointer" }} onClick={() => chooseDetails(ele)}>
                            {ele.client_name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AemContent