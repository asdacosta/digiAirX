import { useEffect, useState } from "react";

function FetchCountries() {
  const [countries, setCountries] = useState([]);

  const getSortedCountries = () => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        data.sort((a, b) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  };
  useEffect(getSortedCountries, []);

  return (
    <>
      <option value="" disabled></option>
      {countries.map((country) => (
        <option key={country.cca3} value={country.name.common}>
          {country.name.common}
        </option>
      ))}
    </>
  );
}

export { FetchCountries };
