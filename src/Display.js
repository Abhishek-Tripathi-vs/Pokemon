import React from "react";

function extractNumberFromUrl(url) {
  // Define a regular expression to match the number between the last two slashes
  const regex = /\/(\d+)\/$/;

  // Use match() method with the regular expression to extract the number
  const match = url.match(regex);

  // Check if there's a match and return the extracted number
  if (match && match[1]) {
    return parseInt(match[1], 10);
  } else {
    return null; // Return null if no match found
  }
}

export default function Display({ name, url }) {
  const number = extractNumberFromUrl(url);

  return (
    <div className="border-solid border-2 border-gray-500 mb-2 shadow-md hover:shadow-lg transform hover:translate-y-2 transition duration-300 ease-in-out p-3 ">
      <img
        className="w-80"
        src={
          "https://web.archive.org/web/20210730142828if_/https://pokeres.bastionbot.org/images/pokemon/" +
          number +
          ".png"
        }
        alt={name}
      />
      <div className="font-bold text-xl text-gray-800">{name}</div>

    </div>
  );
}
