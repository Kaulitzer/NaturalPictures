import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import MyContext from "../MyContext";
import heartFilled from "../assets/icons/heart-filled.svg";

const Favorites = () => {
  const { favorites } = useContext(MyContext);

  return (
    <div className="tarjetas">
      {favorites.map((photo, i) => (
        <div className="tarjetaIndividual" key={i}>
          <Card className="text-dark">
            <Card.Body>
              <Card.Img variant="top" src={photo.src.tiny} />
              <div>
                <img src={heartFilled} alt="Heart Icon" />
                <p>{photo.alt}</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
