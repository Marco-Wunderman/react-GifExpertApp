import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 2) {
      setCategories((categories) => [input, ...categories]);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{input}</h2>
      <input type="text" onChange={handleChangeInput} value={input} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
