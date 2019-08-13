import React from "react";

const Search = ({ name, placeholder, ...rest }) => {
  return (
    <input
      {...rest}
      id={name}
      type="search"
      className="form-control"
      autoComplete="off"
      spellCheck="false"
      placeholder={placeholder}
    />
  );
};

export default Search;
