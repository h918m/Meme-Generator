import React, { useState, useEffect } from "react";

const Generator = () => {
  const [meme, setMeme] = useState({
    upperText: "",
    lowerText: "",
    randomMeme: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const result = await response.json();
      setAllMemes(result.data.memes);
    };

    getMemes();
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    console.log(randomIndex);

    const link = allMemes[randomIndex].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomMeme: link,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-fields">
          <input
            type="text"
            name="upperText"
            className="form-input"
            placeholder="Upper Text"
            value={meme.upperText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lowerText"
            className="form-input"
            placeholder="Lower Text"
            value={meme.lowerText}
            onChange={handleChange}
          />
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼 </button>
      </form>

      <div className="meme-container">
        <img src={meme.randomMeme} className="displayed-meme" alt="" />
        <h2 className="meme-text top">{meme.upperText}</h2>
        <h2 className="meme-text bottom">{meme.lowerText}</h2>
      </div>
    </main>
  );
};

export default Generator;
