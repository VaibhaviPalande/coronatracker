import axios from "axios";

const url = "https://disease.sh/v3/covid-19/all";

const curl = "https://disease.sh/v3/covid-19";

// ✅ Fetch global COVID data
export const fetchData = async (country) => {

  let changeableUrl = url;

  if(country){
    changeableUrl = `${curl}/countries/${country}`;
  }

  try {
    const { data } = await axios.get(changeableUrl);

    return {
      active: data.active,  // ✅ Fix: Use "active" instead of "cases"
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdated: new Date(data.updated).toLocaleString(),
    };
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
};

// ✅ Fetch country list
export const fetchCountries = async () => {
  try {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
    
    // 🔹 API returns an array of country objects, extract "country" field
    return data.map((country) => country.country);
  } catch (error) {
    console.error("Error fetching country list:", error);
    return [];
  }
};

// ✅ Fetch daily COVID data for global trends
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");

    return Object.keys(data.cases).map((date) => ({
      date,
      confirmed: data.cases[date],
      recovered: data.recovered[date],
      deaths: data.deaths[date],
    }));
  } catch (error) {
    console.error("Error fetching daily data:", error);
    return [];
  }
};
