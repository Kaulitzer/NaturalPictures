import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import MyContext from "../MyContext";
import heart from "../assets/icons/heart.svg";
import heartFilled from "../assets/icons/heart-filled.svg";
import "../App.css";

const Gallery = () => {
  const { data, toggleLike } = useContext(MyContext);
  const favorites = data.filter((photo) => photo.liked);

  return (
    <div className="tarjetas">
      {data.map((photo, i) => (
        <div className="tarjetaIndividual" key={i}>
          <Card className="text-dark">
            <Card.Body>
              <Card.Img variant="top" src={photo.src.tiny} />
              <div>
                <img
                  src={photo.liked ? heartFilled : heart}
                  alt="Heart Icon"
                  onClick={() => toggleLike(photo.id)}
                />
                <p>{photo.alt}</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
