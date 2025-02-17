export const SearchFilter = ({
  search,
  setSearch,
  select,
  setSelect,
  sortOrder,
  setSortOrder,
}) => {
  const handleInputOnchange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <section className="section-searchFilter">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputOnchange}
        autoComplete="off"
      />
      <div>
        <button onClick={() => handleSort("Ascending")}>Ascending</button>
      </div>
      <div>
        <button onClick={() => handleSort("Descending")}>Descending</button>
      </div>
      <div>
        <select
          className="select-section"
          value={select}
          onChange={handleSelect}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
