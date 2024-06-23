import React from 'react';
import "../App.css"
const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-control"
      placeholder="Search transactions..."
    />
  );
};

export default SearchInput;
