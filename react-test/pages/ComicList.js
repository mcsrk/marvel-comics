import { Col, List, Row } from "antd";
import React from "react";
import ComicCard from "./ComicCard";
const data = [
  {
    title: "Title 1",
    author: "Jhon",
    price: "299",
  },
  {
    title: "Title 2",
    author: "Jhon",
    price: "299",
  },
  {
    title: "Title 3",
    author: "Jhon",
    price: "299",
  },
  {
    title: "Title 4",
    author: "Jhon",
    price: "299",
  },
  {
    title: "Title 5",
    author: "Jhon",
    price: "299",
  },
  {
    title: "Title 6",
    author: "Jhon",
    price: "299",
  },
];

const ComicList = ({ comicData }) => {
  return (
    <List
      style={{
        minHeight: "280px",
        padding: "24px",
        background: "#fff",
      }}
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(ele) => (
        <List.Item>
          <ComicCard title={ele.title} author={ele.author} price={ele.price} />
        </List.Item>
      )}
    />
  );
};

export default ComicList;
