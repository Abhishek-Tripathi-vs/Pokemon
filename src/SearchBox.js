import React, { useEffect, useState } from "react";
import usehandleSearchText from "./usehandleSearchText";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "./SearchBox.css"; // Import the CSS file

async function GetItems(SearchText, SetData) {
  const res = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      SearchText +
      "&number=20&apiKey=b2f45b62212d4516b0b452206ff66fc4"
  );
  const data = await res.json();
  SetData(data.results);
}

const SearchBox = () => {
  const [SearchText, SetSearchText] = useState("Pizza");
  const [Search, SetSearch] = useState(1);
  const [Data, SetData] = useState([]);

  useEffect(() => {
    GetItems(SearchText, SetData);
  }, [Search]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        onChange={(e) => usehandleSearchText(e, SetSearchText)}
      />
      <button
        className="search-button"
        onClick={() => {
          SetSearch(Search + 1);
        }}
      >
        Search
      </button>

      <div className="cart-container">
        {Data.map((item, index) => (
          <Link to={"/dynamic/" + item.id} key={index}>
            <Cart {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
