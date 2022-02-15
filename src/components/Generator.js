import React from "react";
import { memeData } from "../memeData";

const Generator = () => {
  const [memeImage, setMemeImage] = React.useState("");

  function getImage() {
    const memeArray = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomIndex].url;
    setMemeImage(url);
  }

  return (
    <div className="form">
      <div className="input-fields">
        <input
          type="text"
          name="uppertext"
          id="uppertext"
          placeholder="Upper Text"
        />
        <input
          type="text"
          name="lowertext"
          id="lowertext"
          placeholder="Lower Text"
        />
      </div>
      <button onClick={getImage}>Get a new meme image 🖼 </button>

      <img src={memeImage} className="displayed-meme" alt="" />
    </div>
  );
};

export default Generator;
