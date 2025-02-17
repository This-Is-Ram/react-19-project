import { useEffect, useState, useTransition } from "react";
import { gettingApiData } from "../api/axiosOperations/apiOperations";
import { SearchFilter } from "../components/ui/SearchFilter";
import { CountryCard } from "../components/ui/countrys";
import { NoCountryFound } from "../components/ui/NoCountryFound";
import { Loaderrr } from "../components/ui/Loader";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState();
  const [select, setSelect] = useState("all");
  const [sortOrder, setSortOrder] = useState("Ascending");

  useEffect(() => {
    startTransition(async () => {
      const res = await gettingApiData();
      setCountry(res.data);
    });
  }, []);

  if (isPending) {
    return <Loaderrr />;
  }

  const searchCountry = (curCountry) => {
    if (search) {
      return curCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
    }
    return true;
  };

  const selectRegion = (curCountry) => {
    if (select === "all") {
      return true;
    }
    return curCountry.region.toLowerCase() === select.toLowerCase();
  };

  const filteredCountries = country
    .filter(
      (curCountry) => searchCountry(curCountry) && selectRegion(curCountry)
    )
    .sort((a, b) =>
      sortOrder === "Ascending"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );

  return (
    <>
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          select={select}
          setSelect={setSelect}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </section>
      <ul className="grid grid-three-cols">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((curCountry, index) => (
            <CountryCard key={index} curCountry={curCountry} />
          ))
        ) : (
          <NoCountryFound />
        )}
      </ul>
    </>
  );
};
