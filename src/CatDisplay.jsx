import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

// function that uses fetch to get response back from api
const getRandomCat = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");

  // receive the response and set it to json
  const body = await res.json();
  // return the url for image from the body of the response
  return body[0].url;
};

const CatDisplay = () => {
  // use response as state to update url
  const [url, setUrl] = useState(null);

  const onClickHandler = async () => {
    const url = await getRandomCat();
    setUrl(url);
  };

  return (
    <div className="container">
      <div className="button">
        <Button
          onClick={onClickHandler}
          variant="contained"
          style={{ background: "#E58C8A" }}
        >
          Generate a Random Cat!
        </Button>
      </div>
      <div className="image">
        <img src={url} />
      </div>
    </div>
  );
};

export default CatDisplay;
