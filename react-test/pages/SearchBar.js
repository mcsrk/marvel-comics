import React from "react";
import { Affix, Col, Row, Input, Typography } from "antd";
const { Search } = Input;
const { Title, Paragraph } = Typography;
const SearchBar = ({ setInput, input }) => {
  return (
    <div
      style={{
        minHeight: "280px",
        width: "100%",
        backgroundImage: "url(" + "/images/bg.png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "32x",
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
          <Typography>
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
              Encuentra todos tus comics favoritos de marvel en un solo lugar.
              Compra online y recibe en casa.
            </Paragraph>
          </Typography>
        </Row>
        <Row>
          <Affix style={{ width: "70%", margin: "12px auto" }} offsetTop={10}>
            <Search
              placeholder="input search text"
              size="large"
              // onSearch={onSearch}
              enterButton
              onChange={setInput}
              value={input}
            />
          </Affix>
        </Row>
      </Col>
    </div>
  );
};

export default SearchBar;
