import React, { createContext, useState, useEffect } from "react";
import photos from "../public/photos.json";

const MyContext = createContext({});

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Simula la carga de datos, reemplaza esto con tu lógica de carga real
  useEffect(() => {
    setData(photos.photos);
  }, []);

  const toggleLike = (photoId) => {
    const updatedData = data.map((photo) => {
      if (photo.id === photoId) {
        photo.liked = !photo.liked;
      }
      return photo;
    });

    setData(updatedData);

    const updatedFavorites = updatedData.filter((photo) => photo.liked);
    setFavorites(updatedFavorites);
  };

  return (
    <MyContext.Provider value={{ data, setData, favorites, setFavorites, toggleLike }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
