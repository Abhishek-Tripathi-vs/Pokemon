import React, { useEffect, useState } from "react";
import usehandleSearchText from "./usehandleSearchText";
import Cart from "./Cart";

async function GetItems(SearchText, SetData) {
  const res = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      SearchText +
      "&number=20&apiKey=b2f45b62212d4516b0b452206ff66fc4"
  );
  const data = await res.json();
  SetData(data.results);
  console.log(data);
}

const SearchBox = () => {
  const [SearchText, SetSearchText] = useState("Pizza");
  const [Search, SetSearch] = useState(1);
  const [Data, SetData] = useState([]);

  useEffect(() => {
    GetItems(SearchText, SetData);
  }, [Search]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => usehandleSearchText(e, SetSearchText)}
      />
      <button
        onClick={() => {
          SetSearch(Search + 1);
        }}
      >
        Search
      </button>

      {Data.map((item, index) => (
        <Cart key={index} {...item} />
      ))}
    </div>
  );
};

export default SearchBox;
