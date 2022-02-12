import React from "react";
import { Breadcrumb } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import SearchBar from "./SearchBar";
import ComicCard from "./ComicCard";
// import Background from "./images/bg.jpg";

const MainPage = () => {
  return (
    <>
      <Layout>
        <Content>
          <SearchBar />

          <div style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                minHeight: "280px",
                padding: "24px",
                background: "#fff",
              }}
            >
              <ComicCard />
            </div>
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
