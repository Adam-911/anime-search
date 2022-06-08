import React from "react";
import { MediaTitle } from "../../../types";

type AnimeItemContentProps = { 
    title?: MediaTitle
};

const AnimeItemContent = ({ title }: AnimeItemContentProps) => {
    return (
        <div>
            <p>{title?.english}</p>
            <p>{title?.native}</p>
        </div>
    )
}

export default AnimeItemContent;