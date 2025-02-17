import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({ curCountry }) => {
  const { capital, flags, name, population, region } = curCountry;
  return (
    <>
      <li className="country-card card">
        <div className="container-card bg-white-box">
          <img height={"100rem"} src={flags.svg} alt={flags.alt} />
          <div className="countryInfo">
            <p className="card-title">{name.common}</p>
            <p>
              <span className="card-description">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="card-description">Region: </span>
              {region}
            </p>
            <p>
              <span className="card-description">Capital: </span>
              {capital[0]}
            </p>
            <NavLink to={`/country/${name.common}`}>
              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
};
