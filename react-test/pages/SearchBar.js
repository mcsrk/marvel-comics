import React from "react";
import { Affix, Col, Row, Input, Typography } from "antd";
const { Search } = Input;
const { Title, Paragraph } = Typography;
const SearchBar = () => {
  return (
    <div
      style={{
        minHeight: "280px",
        width: "100%",
        backgroundImage:
          "url(" +
          "https://i.pinimg.com/originals/e3/a8/c0/e3a8c0ae20a3940fce0cfb9035b0ae6d.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Col
        style={{
          maxWidth: "700px",
          padding: "0 15px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <Row>
          <Title
            level={1}
            style={{
              textAlign: "center !important",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Catalogo de Cómics
          </Title>
          <Paragraph
            style={{
              textAlign: "center !important",
              color: "white",
              fontSize: 18,
            }}
          >
            Showcase your products by selecting one of the pre-existing free
          </Paragraph>
        </Row>
        <Row>
          <Affix style={{ width: "70%", margin: "12px auto" }} offsetTop={10}>
            <Search
              placeholder="input search text"
              size="large"
              // onSearch={onSearch}
              enterButton
            />
          </Affix>
        </Row>
      </Col>
    </div>
  );
};

export default SearchBar;
