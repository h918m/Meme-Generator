import React from "react";
import { memeData } from "../memeData";

const Generator = () => {
  const [memeImages, setMemeImages] = React.useState(memeData);

  function getMemeImage() {
    const memeArray = memeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomIndex].url;
    setMemeImages((prevMeme) => ({
      ...prevMeme,
      randomMeme: url,
    }));
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
      <button onClick={getMemeImage}>Get a new meme image 🖼 </button>
      <img src={memeImages.randomMeme} className="displayed-meme" alt="" />
    </div>
  );
};

export default Generator;
