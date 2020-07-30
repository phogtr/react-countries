import React from "react";

const Country = ({ country, setCountry }) => {
  const onClick = () => setCountry(country.name);

  return (
    <div>
      {country.name} <button onClick={onClick}>Show</button>
    </div>
  );
};

export default Country;
