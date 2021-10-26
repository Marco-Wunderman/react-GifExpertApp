// import React, { useEffect, useState } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);
  const { data: images, load } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {load && <p className="card animate__animated animate__flash">cargando...</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
