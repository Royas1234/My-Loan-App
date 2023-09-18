import React, { useState } from "react";
import FilledBtn from "../Button/FilledBtn";
import "../../Pages/Dashboard/DashboardOverview/dashboard.css";

const SearchBar = ({ handleSearch }) => {
 const [searchItems, setSearchItems] = useState("");

 const handleChange = (event) => {
  setSearchItems(event.target.value);
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  handleSearch(searchItems);
 };

 return (
  <div className="dash_searchBar">
   <form onSubmit={handleSubmit}>
    <fieldset className="dash__search">
     <input
      type="text"
      placeholder="Search for Loans"
      value={searchItems}
      onChange={handleChange}
     />
     <FilledBtn title="Search" type="submit" />
    </fieldset>
   </form>
  </div>
 );
};

export default SearchBar;
