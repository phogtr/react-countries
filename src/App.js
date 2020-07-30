import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { Filter, Countries } from "./components";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const onChange = (e) => setFilter(e.target.value);
  const filterList =
    filter === ""
      ? countries
      : countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="App">
      <Filter filter={filter} onChange={onChange} />
      <Countries countries={filterList} setCountries={setFilter} />
    </div>
  );
};

export default App;
