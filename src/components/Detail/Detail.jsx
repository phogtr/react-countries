import React from "react";
import { Weather } from "../../components";

const Detail = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <span>population {country.population}</span>
      <h2>language</h2>
      {country.languages.map((language) => (
        <li key={language.name}>{language.name}</li>
      ))}
      <img
        src={country.flag}
        alt={`${country.name}'s flag}`}
        width="170"
        style={{ border: "1px solid black" }}
      />
      <div>
        <Weather country={country} />
      </div>
    </div>
  );
};

export default Detail;
