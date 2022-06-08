import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { MediaTitle } from "../../types";
import AnimeItemContent from "./shared/AnimeItemContent";

type AnimeItemProps = {
    title?: MediaTitle,
}

const AnimeItem = ({ title }: AnimeItemProps) => {
    console.log("TITLE", title && title);
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <HeartOutlined key="favorite"/>
            ]}
        >
            <AnimeItemContent title={title}/>
        </Card>
    )
}

export default AnimeItem;