import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, notification, Radio, Row, Typography } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import SearchBar from "./SearchBar";
import ComicList from "./ComicList";
import axios from "axios";
const { Title } = Typography;
const MainPage = () => {
  const [input, setInput] = useState("");
  const [comicsData, setComicsData] = useState([]);

  const useDebouncedEffect = (effect, deps, delay) => {
    useEffect(() => {
      const handler = setTimeout(() => effect(), delay);
      return () => clearTimeout(handler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(deps || []), delay]);
  };
  const openNotification = () => {
    notification.error({
      message: `Error en la búsqueda`,
      description: "Recargue la página si el error pesrsiste",
    });
  };

  const getComicsByInput = async () => {
    const TS = "1";
    const APIKEY = "22d97eb6512779e32a83d97ad7e7ff41";
    const HASH = "fe011abff2ca533eb29fff528cc613d9";
    try {
      let res = await axios.get(`http://gateway.marvel.com/v1/public/comics`, {
        params: { ts: TS, apikey: APIKEY, hash: HASH },
      });
      setComicsData(res.data.data.results);
      console.warn(res.data.data.results);
    } catch (err) {
      console.error(err);
      openNotification();
    }
  };

  useDebouncedEffect(getComicsByInput, [input], 250);

  return (
    <>
      <Layout>
        <Content>
          <SearchBar setInput={setInput} input={input} />

          <div style={{ padding: "0 50px" }}>
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
                <Radio.Group
                  defaultValue="spiderman"
                  style={{ margin: "12px auto 0px auto" }}
                >
                  <Radio.Button value="spiderman">SpiderMan</Radio.Button>
                  <Radio.Button value="Wolverine">Wolverine</Radio.Button>
                  <Radio.Button value="Hulk">Hulk</Radio.Button>
                  <Radio.Button value="Thor">Thor</Radio.Button>
                </Radio.Group>
              </Row>
              <Row>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              </Row>
            </Col>

            <ComicList comicsData={comicsData} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made by Jhon Acosta for Ayenda.
        </Footer>
      </Layout>
    </>
  );
};

export default MainPage;
