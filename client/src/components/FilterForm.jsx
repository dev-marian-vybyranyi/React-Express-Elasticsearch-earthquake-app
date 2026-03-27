import { useState } from "react";

const FilterForm = ({ sendSearchRequest }) => {
  const [chosenType, setChosenType] = useState(null);
  const [chosenMag, setChosenMag] = useState(null);
  const [chosenLocation, setChosenLocation] = useState(null);
  const [chosenDateRange, setChosenDateRange] = useState(null);
  const [chosenSortOption, setchosenSortOption] = useState(null);

  const handleSearch = () => {
    sendSearchRequest({
      type: chosenType,
      mag: chosenMag,
      location: chosenLocation,
      dateRange: chosenDateRange,
      sortOption: chosenSortOption,
    });
  };

  return (
    <div className="type-selector">
      <ul>
        <li>
          <select
            name="types"
            id="types"
            value={chosenType || ""}
            onChange={(e) => setChosenType(e.target.value)}
          >
            <option value="null">Select a Type</option>
            <option value="earthquake">Earthquake</option>
            <option value="quarry blast">Quarry Blast</option>
            <option value="ice quake">Ice Quake</option>
            <option value="explosion">Explosion</option>
          </select>
        </li>
        <li>
          <select
            name="mag"
            id="mag"
            value={chosenMag || ""}
            onChange={(e) => setChosenMag(e.target.value)}
          >
            <option value="null">Select magnitude level</option>
            <option value="2.5">2.5+</option>
            <option value="5.5">5.5+</option>
            <option value="6.1">6.1+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
          </select>
        </li>
        <li>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              <input
                className="form"
                type="text"
                placeholder="Enter city, state, country"
                value={chosenLocation || ""}
                onChange={(e) => setChosenLocation(e.target.value)}
              />
            </label>
          </form>
        </li>
        <li>
          <select
            name="dateRange"
            id="dateRange"
            value={chosenDateRange || ""}
            onChange={(e) => setChosenDateRange(e.target.value)}
          >
            <option value="null">Select date range</option>
            <option value="7">Past 7 Days</option>
            <option value="14">Past 14 Days</option>
            <option value="21">Past 21 Days</option>
            <option value="30">Past 30 Days</option>
          </select>
        </li>
        <li>
          <select
            name="sortOption"
            id="sortOption"
            value={chosenSortOption || ""}
            onChange={(e) => setchosenSortOption(e.target.value)}
          >
            <option value="null">Sort by</option>
            <option value="desc">Largest Magnitude First</option>
            <option value="asc">Smallest Magnitude First</option>
          </select>
        </li>
        <li>
          <button onClick={handleSearch}>Search</button>
        </li>
      </ul>
    </div>
  );
};

export default FilterForm;
