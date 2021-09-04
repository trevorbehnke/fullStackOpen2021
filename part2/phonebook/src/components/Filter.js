import React from "react";

const Filter = ({ filtered, handleChange }) => {
  return (
    <div>
      filter shown with
      <input value={filtered} onChange={handleChange} />
    </div>
  );
};

export default Filter;
