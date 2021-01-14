import React from "react";
// function for search field
function Search({search}) {
  return (
    <div className="d-flex justify-content-center">
      <form className="d-flex mt-5 mb-5 w-25">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={search}
          name="search"
        />
      </form>
    </div>
  );
}

export default Search;
