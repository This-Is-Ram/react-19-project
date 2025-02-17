import axios from "axios";
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// getting api data
export const gettingApiData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// individual country data
export const gettingCountryData = (id) => {
  return api.get(
    `/name/${id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
