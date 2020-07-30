import React from "react";
import { Country, Detail } from "../../components";

const Countries = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 1) {
    return <Detail country={countries[0]} />;
  } else if (countries.length > 1) {
    return countries.map((country) => (
      <Country key={country.name} country={country} setCountry={setCountries} />
    ));
  } else {
    return <div>No countries match the search</div>;
  }
};

export default Countries;
