import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  // const handleAdd = (e) => {
  //   // setCategories([...categories,"Death Note"]);
  //   setCategories(["Death Note", ...categories]); //Aparecera Death Note al principio
  //   // setCategories((categories) => [...categories, "Digimon"]); Esta es otra forma de agregar un nuevo valor al array del estado
  // };
  return (
    <>
      <h2>Gift Expert App</h2>
      {/* <button onClick={handleAdd}>Agregar Anime</button> */}
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
