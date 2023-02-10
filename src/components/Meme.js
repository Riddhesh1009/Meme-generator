// import memeData from "../memeData";
import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage: "https://i.imgflip.com/345v97.jpg",
  });

  //All Meme Tempate stored in the below useState
  // const [allMemes, setAllMemes] = React.useState(memeData.data.memes);
  const [allMemes, setAllMemes] = React.useState("");

  React.useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemes(data.data.memes))
  },[])
  console.log(allMemes)

  // Function to retrieve a new random image
  function getMemeImage() {

    const randomnumber = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: allMemes[randomnumber].url
        }))
  }

  function handleChange(event){
    const{name,value}=event.target
    setMeme(prevMeme=>({
        ...prevMeme,
        [name]:value
    }))
  }

  return (
    <main>
      <div className="form">
        <div>
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            className="form--input"
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={meme.bottomText}
            className="form--input"
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme--img" src={meme.randomImage} alt="Meme" />
        <h2 className="meme--toptext">{meme.topText}</h2>
        <h2 className="meme--bottomtext">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
