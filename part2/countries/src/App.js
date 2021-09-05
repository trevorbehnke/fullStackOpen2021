import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setFiltered(event.target.value);
  };

  const countriesToShow = countries.filter((country) => {
    return country.name.toLowerCase().includes(filtered.toLowerCase());
  });

  return (
    <div>
      find countries
      <input value={filtered} onChange={handleChange} />
      {(() => {
        if (filtered === "") {
          return <div></div>;
        } else if (countriesToShow.length > 10) {
          return <div>Too many matches, specify another filter</div>;
        } else if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
          return countriesToShow.map((country) => {
            return <div key={country.name}>{country.name}</div>;
          });
        } else {
          // Pick Up Here!!!
          return <div>There is 1 remaining</div>;
        }
      })()}
    </div>
  );
};

export default App;
