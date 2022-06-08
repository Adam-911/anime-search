import { useQuery } from "@apollo/client";
import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { GET_ALL_ITEMS } from "../../query/media";
import { AnimeData, Media } from "../../types";
import AnimeItem from "../AnimeItem/AnimeItem";

const AnimeList = () => {
    const { data, loading, error } = useQuery(GET_ALL_ITEMS);
    const [media, setMedia] = useState<any>();
    
    const list = (list: Array<Media>) => (
        list?.map((el: Media) => ( <AnimeItem key={el.id} title={el.title}/> ))
    );

    console.log("DATA: ", media);

    useEffect(() => {
        if (!loading) setMedia(data?.Page?.media); 
    }, [data]) 

    return (
        <>
            {list(media)}
        </>
    );
}

export default AnimeList;