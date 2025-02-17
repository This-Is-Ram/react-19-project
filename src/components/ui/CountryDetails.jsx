import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loaderrr } from "./Loader";
import { gettingCountryData } from "../../api/axiosOperations/apiOperations";

export const CountryDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [isPending, startTransition] = useTransition();
  const [indCountry, setIndCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await gettingCountryData(id);
      console.log("individual", res.data[0]);
      if (res.status === 200) {
        setIndCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return <Loaderrr />;
  }
  return (
    <section className="card country-details-card container">
      <div className="container-card bg-green-box">
        {indCountry && (
          <div className="country-image grid grid-two-cols">
            <img
              src={indCountry.flags.svg}
              alt={indCountry.name.official}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{indCountry.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {Object.keys(indCountry.name.nativeName)
                    .map((curKey) => indCountry.name.nativeName[curKey].common)
                    .join(",")}
                </p>
                <p>
                  <span className="card-description">Population : </span>
                  {indCountry.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region : </span>
                  {indCountry.region}
                </p>
                <p>
                  <span className="card-description">Sub Region : </span>
                  {indCountry.subregion}
                </p>
                <p>
                  <span className="card-description">Capital : </span>
                  {indCountry.capital}
                </p>
                <p>
                  <span className="card-description">Top level domain : </span>
                  {indCountry.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currencies : </span>
                  {Object.keys(indCountry.currencies)
                    .map((curElem) => indCountry.currencies[curElem].name)
                    .join(",")}
                </p>
                <p>
                  <span className="card-description">Languages : </span>
                  {Object.keys(indCountry.languages)
                    .map((key) => indCountry.languages[key])
                    .join(",")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
