import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
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
        maxWidth: "350px",
        boxShadow: " 0 20px 20px rgba(0,0, 0,.16)",
        borderRadius: "3px",
        transition: "240ms",
        "&:hover": {
          boxShadow: "0 40px 40px rgba0,0,0,.32)",
          transform: "translate(" + 0 + "px, " + -20 + "px)",
        },
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: "url(" + getImage() + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderRadius: "4px 4px 0 0",
        }}
      ></div>
      <div style={{ padding: "24px", backgroundColor: "white" }}>
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
        {/* <ul
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            margin: "12px 0 0 0",
            fontWize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "#4B4F56",
          }}
        >
          <li>Zona: Kennedy</li>
          <li>Capacidad: 20 m^3</li>
          <li>Condutor: Bruce "duro de matar" Willis</li>
        </ul> */}
        <hr
          style={{
            margin: "16px 0 0 0",
            border: 0,
            borderTop: "1px solid #ECEFF1",
          }}
        ></hr>
        <Text
          style={{
            margin: "8px 0 4px 0",
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

        <Button
          type={"primary"}
          style={{
            fontWeight: 700,
          }}
        >
          {comicInfo?.price ?? "sin precio"} USD
        </Button>
      </div>
    </div>
  );
};

export default ComicCard;
