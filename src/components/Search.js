import React from "react";

function Search({search, onChange}) {
  return (
    <div className="d-flex justify-content-center">
      <form className="d-flex mt-5 mb-5 w-25">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default Search;
