import React, { useEffect, useState } from "react";
import "../Styles/meme.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  });

  // const [memeImage, setMemeImage] = useState("");
  const [imageVisible, setImageVisible] = useState(false);

  function memeImageFunc() {
    // const memeArr = allMemeImages.data.memes;
    const random = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[random].url;

    setMeme((prevState) => {
      return { ...prevState, randomImage: url };
    });
    setImageVisible(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="meme-form">
        <input
          className="meme-input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          id="toptext"
        />

        <input
          className="meme-input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          id="bottomText"
        />
        <button className="meme-button" onClick={memeImageFunc}>
          Get a new meme image
        </button>
      </div>
      {imageVisible && (
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="memes" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}
export default Meme;
