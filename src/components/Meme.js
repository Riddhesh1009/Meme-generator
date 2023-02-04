import memeData from "../memeData";
import React from "react";

export default function Meme() {
    //New useState for a meme
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ii4oc.jpg",
    });
    console.log(meme.topText + meme.bottomText)

  //All Meme Tempate stored in the below useState
  const [allMemeImages, setAllMemeImages] = React.useState(memeData.data.memes);
  // console.log(allMemeImages.length)

  //UseState to store Meme Template
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/1ii4oc.jpg"
  );

  // Function to retrieve a new random image
  function getMemeImage() {
    // const memeArray= memeData.data.memes;
    const randomnumber = Math.floor(Math.random() * allMemeImages.length);

    setMemeImage(allMemeImages[randomnumber].url);

    const tText = document.getElementById("topText").value;
    const bText = document.getElementById("bottomText").value;

    setMeme({
        topText:tText,
        bottomText:bText,
        randomImage:memeImage
    })
    
  }


  return (
    <main>
      <div className="form">
        <div>
          <input
            type="text"
            placeholder="Top Text"
            id="topText"
            className="form--input"
          />
          <input
            type="text"
            id="bottomText"
            placeholder="Bottom Text"
            className="form--input"
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img className="form--img" src={meme.randomImage} alt="Meme" />
      </div>
    </main>
  );
}
