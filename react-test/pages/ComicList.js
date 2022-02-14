import { Col, Row } from "antd";
import React from "react";
import ComicCard from "./ComicCard";

const ComicList = ({ comicData }) => {
  return (
    <Row
      style={{
        minHeight: "280px",
        padding: "24px",
        background: "#fff",
      }}
      gutter={[24, 24]}
    >
      <Col span={6}>
        <ComicCard />
      </Col>
      <Col span={6}>
        <ComicCard />
      </Col>
      <Col span={6}>
        <ComicCard />
      </Col>
      <Col span={6}>
        <ComicCard />
      </Col>

      <Col span={6}>
        <ComicCard />
      </Col>
      <Col span={6}>
        <ComicCard />
      </Col>
      <Col span={6}>
        <ComicCard />
      </Col>
      <Col span={6}>
        <ComicCard />
      </Col>
    </Row>
  );
};

export default ComicList;
