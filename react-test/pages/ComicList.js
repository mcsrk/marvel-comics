import { Col, List, Row } from "antd";
import React from "react";
import ComicCard from "./ComicCard";

const ComicList = ({ comicsData }) => {
  return (
    <List
      style={{
        minHeight: "280px",
        padding: "24px",
        background: "#fff",
      }}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={comicsData}
      renderItem={(ele) => (
        <List.Item>
          <ComicCard comicInfo={ele} />
        </List.Item>
      )}
    />
  );
};

export default ComicList;
