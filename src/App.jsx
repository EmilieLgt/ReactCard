import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import StarsRating from "./components/StarsRating";
import "./styles.scss"

function App() {
  let albumsList = [
    {
      title: "Harry Styles",
      year:"2017",
      spotify: "https://open.spotify.com/embed/album/1FZKIm3JVDCxTchXDo5jOV?utm_source=generator",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859",
      songs: [
        {
          track: 1,
          title: "Meet Me in the Hallway",
        },
        {
          track: 2,
          title: "Sign of the Times",
        },
        {
          track: 3,
          title: "Carolina",
        },
        {
          track: 4,
          title: "Two Ghosts",
        },
        {
          track: 5,
          title: "Sweet Creature",
        },
        {
          track: 6,
          title: "Only Angel",
        },
        {
          track: 7,
          title: "Kiwi",
        },
        {
          track: 8,
          title: "Ever Since New York",
        },
        {
          track: 9,
          title: "Woman",
        },
        {
          track: 10,
          title: "From the Dining Table",
        }
      ],
    },
    {
      title: "Fine Line",
      year:"2019",
      spotify: "https://open.spotify.com/embed/album/7xV2TzoaVc0ycW7fwBwAml?utm_source=generator",
      imgSrc:
        "https://www.allgoodcleanrecords.com/wp-content/uploads/2022/02/c2ccfd81d8dab0cf71c004b206f0db8a.jpeg",
      songs: [
        {
          track: 1,
          title: "Golden",
        },
        {
          track: 2,
          title: "Watermelon Sugar",
        },
        {
          track: 3,
          title: "Adore You",
        },
        {
          track: 4,
          title: "Lights Up",
        },
        {
          track: 5,
          title: "Cherry",
        },
        {
          track: 6,
          title: "Falling",
        },
        {
          track: 7,
          title: "To Be So Lonely",
        },
        {
          track: 8,
          title: "She",
        },
        {
          track: 9,
          title: "Sunflower, Vol.6",
        },
        {
          track: 10,
          title: "Canyon Moon",
        },
        {
          track: 11,
          title: "Treat People with Kindness",
        },
        {
          track: 12,
          title: "Fine Line",
        },
      ],
    },
    {
      title: "Harry's House",
      year:"2022",
      spotify: "//open.spotify.com/embed/album/5r36AJ6VOJtp00oxSkBZ5h?utm_source=generator",
      imgSrc:
        "https://www.discrepancy-records.com.au/assets/alt_1/W0-2640143.jpg?20230803144233",
      songs: [
        {
          track: 1,
          title: "Music for a Sushi Restaurant",
        },
        {
          track: 2,
          title: "Late Night Talking",
        },
        {
          track: 3,
          title: "Grapejuice",
        },
        {
          track: 4,
          title: "As It Was",
        },
        {
          track: 5,
          title: "Daylight",
        },
        {
          track: 6,
          title: "Little Freak",
        },
        {
          track: 7,
          title: "Matilda",
        },
        {
          track: 8,
          title: "Cinema",
        },
        {
          track: 9,
          title: "Daydreaming",
        },
        {
          track: 10,
          title: "Keep Driving",
        },
        {
          track: 11,
          title: "Satellite",
        },
        {
          track: 12,
          title: "Boyfriends",
        },
        {
          track: 13,
          title: "Love of My Life",
        },
      ],
    },
  ];
  
  return (
    <div className="page">
      <h1>Harry Styles Discography </h1>
      <section className="cardContainer"> 
      <Card albums={albumsList}/> 
      </section>
    </div>
  );
}

export default App;
