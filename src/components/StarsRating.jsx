import { useState } from "react";

function StarsRating({ defaultRating, icon, color }) {

  const defaultIcon = "✿";
  const defaultUnselected = "rgb(237, 240, 251)";
  const defaultColor = "rgb(160, 38, 10)";
  
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(5).fill(icon || defaultIcon); // création d'un tableau à 5 entrées  pour stocker les icones
  let handleClick = (index) => {
    setRating(index + 1);
   // localStorage.setItem("starRating", index + 1); <-- pour conserver si on refresh la page
  };

  return (
    <div className="starsContainer">
      {stars.map((item, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);
          
        let elementColor = "";
        if (isActiveColor) {
          elementColor = color || defaultColor;
        } else {
          elementColor = defaultUnselected;
        }
        return (
          <div
            className="star"
            key={index}
            style={{ color: elementColor }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index)}
          >
            {icon ? icon : defaultIcon}
          </div>
        );
      })}
    </div>
  );
}

export default StarsRating;
