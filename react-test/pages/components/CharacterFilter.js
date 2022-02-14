import { Breadcrumb, Affix, Row, Typography, Radio, Button, Col } from "antd";
import React from "react";
const { Title } = Typography;

const CharacterFilter = ({ radioValue, onChange, crumb, input }) => {
  return (
    <Col>
      <Row
        style={{
          marginTop: "16px",
          justifyContent: "center",
        }}
      >
        <Typography>
          <Title
            level={5}
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Filtra por personajes
          </Title>
        </Typography>
      </Row>
      <Row>
        <Affix style={{ margin: "12px auto 0px auto" }} offsetTop={54}>
          <div>
            <Radio.Group
              onChange={onChange}
              size="large"
              defaultValue={radioValue}
            >
              <Radio.Button value="1009465">Mystique</Radio.Button>
              <Radio.Button value="1009504">Professor X</Radio.Button>
              <Radio.Button value="1010373">Howard el Pato</Radio.Button>
              <Radio.Button value="1009664">Thor</Radio.Button>
            </Radio.Group>
            <Button
              type="link"
              onClick={() => {
                setRadioValue(null);
                setInput();
              }}
            >
              Limpiar
            </Button>
          </div>
        </Affix>
      </Row>
      <Row>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Comics</Breadcrumb.Item>
          <Breadcrumb.Item>
            {crumb} {input && crumb ? " & " : ""} {input}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </Col>
  );
};

export default CharacterFilter;
