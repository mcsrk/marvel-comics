import React, { useEffect, useState } from "react";
import {
  Affix,
  Breadcrumb,
  Button,
  Col,
  notification,
  Radio,
  Row,
  Typography,
} from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import SearchBar from "./SearchBar";
import ComicList from "./ComicList";
import axios from "axios";
const { Title } = Typography;
const MainPage = () => {
  const [input, setInput] = useState();
  const [radioValue, setRadioValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [comicsData, setComicsData] = useState([]);
  const [crumb, setCrumb] = useState(null);
  const chars = [
    { name: "Mystique", id: "1009465" },
    { name: "Professor X", id: "1009504" },
    { name: "Howard el Pato", id: "1010373" },
    { name: "Thor", id: "1009664" },
  ];
  useEffect(() => {
    if (radioValue) {
      let temp = chars.filter((e) => e.id === radioValue)[0].name;
      setCrumb(temp);
    } else {
      setCrumb(null);
    }
  }, [radioValue]);
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
    setLoading(true);
    try {
      let res = await axios.get(`http://gateway.marvel.com/v1/public/comics`, {
        params: {
          ...(input ? { titleStartsWith: input } : {}),
          ...(radioValue ? { characters: radioValue } : {}),
          ts: TS,
          apikey: APIKEY,
          hash: HASH,
        },
      });
      setComicsData(res.data.data.results);

      setLoading(false);
    } catch (err) {
      openNotification();
      setLoading(false);
    }
  };

  useDebouncedEffect(getComicsByInput, [input, radioValue], 250);

  const onChange = (e) => {
    setRadioValue(e.target.value);
  };

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
                <Affix style={{ margin: "12px auto 0px auto" }} offsetTop={54}>
                  <div>
                    <Radio.Group
                      onChange={onChange}
                      size="large"
                      defaultValue={radioValue}
                    >
                      <Radio.Button value="1009465">Mystique</Radio.Button>
                      <Radio.Button value="1009504">Professor X</Radio.Button>
                      <Radio.Button value="1010373">
                        Howard el Pato
                      </Radio.Button>
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

            <ComicList comicsData={comicsData} loading={loading} />
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
