import React, { useEffect, useState } from "react";
import { Badge, Button, Image, Row, Space, Tooltip, Typography } from "antd";
const { Text } = Typography;

const ComicCard = ({ comicInfo }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    let authorsArray = comicInfo.creators.items.map(({ name }) => name);
    setAuthors(authorsArray);
  }, [comicInfo]);

  const getImage = () => {
    let imageLink =
      "https://unnimedios.com.mx/wp-content/uploads/2021/11/Image-Not-Available.png";
    if (comicInfo.images.length !== 0) {
      imageLink =
        comicInfo.images[0].path + "." + comicInfo.images[0].extension;
    }
    return imageLink;
  };
  return (
    <div
      style={{
        height: "456px",
        maxWidth: "350px",
        boxShadow: " 0 20px 20px rgba(0,0, 0,.16)",
        position: "relative",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
        }}
      >
        <Image width={"100%"} src={getImage()} />
      </div>

      <div
        style={{
          padding: "16px 24px",
          height: "auto",
          width: "100%",
          position: "absolute",
          bottom: "0",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "32px",
          }}
        >
          {comicInfo?.title ?? "Sin título"}
        </h2>

        <hr
          style={{
            margin: "16px 0 0 0",
            border: 0,
            borderTop: "1px solid #ECEFF1",
          }}
        ></hr>
        <Text
          style={{
            margin: "8px 0 8px 0",
            fontSize: "12px",
            fontWeight: 400,
            color: "#90949C",
            width: "100%",
          }}
          ellipsis={{ tooltip: authors.join(", ") }}
        >
          {authors.length
            ? "Autores: " + authors.join(", ")
            : "Sin autor(es) conocidos"}
        </Text>
        <br></br>

        <Row>
          <Tooltip placement="top" title={"Copia física"}>
            <Badge
              style={comicInfo.prices[0].price === 0 ? {} : { display: "none" }}
              count={"Free"}
            >
              <Button
                type="primary"
                style={{
                  fontWeight: 700,
                  margin: "0 8px 4px 0",
                }}
              >
                {comicInfo.prices[0].price} USD
              </Button>
            </Badge>
          </Tooltip>
          {comicInfo.prices.length == 2 && (
            <Tooltip placement="top" title={"Copia digital"}>
              <Button type="secondary">{comicInfo.prices[1].price} USD</Button>
            </Tooltip>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ComicCard;
