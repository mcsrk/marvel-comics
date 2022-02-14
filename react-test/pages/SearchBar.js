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
          textAlign: "center",
        }}
      >
        <Row>
          <Typography>
            <Title
              level={1}
              style={{
                color: "white",
                fontWeight: "bold",
                marginTop: "32px",
              }}
            >
              Catalogo de Cómics
            </Title>
            <Paragraph
              style={{
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
              enterButton
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </Affix>
        </Row>
      </Col>
    </div>
  );
};

export default SearchBar;
