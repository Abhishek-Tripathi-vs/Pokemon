import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dynamic.css"; // Import the CSS file

async function getDetails(setInfo, p) {
  const res = await fetch(
    "https://api.spoonacular.com/recipes/" +
      p.id +
      "/information?apiKey=b2f45b62212d4516b0b452206ff66fc4"
  );
  const data = await res.json();
  setInfo(data);
}

const Dynamic = () => {
  const p = useParams();
  useEffect(() => {
    getDetails(setInfo, p);
  }, []);
  const [Info, setInfo] = useState({});

  return Object.keys(Info).length === 0 ? (
    <div className="dynamic-container">Waitttttt</div>
  ) : (
    <div className="dynamic-container">
      <h1 className="dynamic-header">Instructions :</h1>
      <div className="dynamic-instructions">{Info.instructions}</div>
      {Info.analyzedInstructions?.[0].steps.map((step, index) => (
        <div key={index} className="dynamic-step">
          <h2 className="dynamic-step-number">Step Number : {step.number}</h2>
          <h3 className="dynamic-step-description">{step.step}</h3>
        </div>
      ))}
    </div>
  );
};

export default Dynamic;
