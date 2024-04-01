import { useState } from "react";
import StarsRating from "./StarsRating";

function Card({ albums }) {
  console.log(albums);

  return (
    <>
      {albums.map((album) => (
        <div className="card">
          <div className="cardInfo" key={album.index}>

            <figcaption className="pochetteTitre">
              <img src={album.imgSrc} alt={album.title} />
              <h2>{album.title}</h2>
              <h4>{album.year}</h4>
            </figcaption>

            <figure>
              <ul>
                {album.songs.map((song, songIndex) => (
                  <li key={songIndex}>
                    {song.track}. {song.title}
                  </li>
                ))}
              </ul>
            </figure>
          </div>

          <figcaption className="avis">
            <h3>Rate this album </h3>
            <StarsRating count={album.songs.length} />
          </figcaption>

          <div className="spotifyPlaylist">
            <h3>Discover more </h3>
            <iframe
              src={album.spotify}
              width="70%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
