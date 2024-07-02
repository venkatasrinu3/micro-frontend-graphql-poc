import { useQuery } from "@apollo/client";
import { GET_POST_DATA } from "../../graphql/queries";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Skeleton, Stack } from "@mui/material";
import "./InfiniteScroll.scss"

const InfiniteScrollComponent = () => {
    const { loading, error, data } = useQuery(GET_POST_DATA)
    const [postData, setPostsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        setPostsData(data?.posts)
    },[loading,data])

    useEffect(() => {
        if(postData && postData?.length){
            setFilteredData(postData.slice(0, 10));
        }
    }, [postData])

    const fetchMore = useCallback(() => {
        if (filteredData.length === 50) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setFilteredData(filteredData.concat(postData.slice(filteredData.length, filteredData.length + 10)))
            }, 2000);
        }

    }, [filteredData])

    const SkeletonLoader = () => {
        return (
            <Stack direction='column' spacing={2}>
                <Skeleton variant='text' sx={{ fontSize: "16px" }} width={400} />
                <Skeleton variant='rectangular' width={400} height={350} />
            </Stack>
        )
    }

    return (
        <Stack direction="column" spacing={5} className='scroll-page-wrapper'>
            <InfiniteScroll
                dataLength={filteredData.length}
                hasMore={hasMore}
                className='scroll-content-wrapper'
                style={{width:"100%"}}
                next={fetchMore}
                loader={SkeletonLoader()}
                endMessage={<h3>Enough scrolling Now go to work!!</h3>}
            >
                {filteredData.map((ele) => {
                    return (
                        <Card className="post-wrapper" key={ele.id}>
                            <span className='post-title'>{ele.id} {ele.title}</span>
                            <img src={ele.url} alt={"image" + ele.id} />

                        </Card>
                    )
                })}
            </InfiniteScroll>

        </Stack>
    )

}
export default InfiniteScrollComponent