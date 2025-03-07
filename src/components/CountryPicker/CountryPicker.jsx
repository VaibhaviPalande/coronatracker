import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@mui/material";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => { // ✅ Accept handleCountryChange as a prop
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const countries = await fetchCountries();
      setFetchedCountries(countries);
    };
    
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}> {/* ✅ Pass selected country */}
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
