import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import DashSearch from "./components/DashSearch";
import PaginationTable from "../../../components/Overview/PaginationTable";
import "./dashboard.css";
import axios from "axios";
import ChartCards from "./components/ChartCards";

const DashboardOverview = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const categoryStateArray = useState("");
  const setSelectedCategory = categoryStateArray[1];

  let savedToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/dashboard/loans`, {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log({ response });
          setSearchResults(response.data.loans);
          setLoanData(response.data.loans);
        }
      })
      .catch((error) => {
        if (error.response === 401) {
          console.log(error.response);
          return <Navigate to="/login" />;
        }
      });
  }, [savedToken]);

  useEffect(() => {
    const results = loanData.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchItems.toLowerCase()) ||
        user.loanId.toLowerCase().includes(searchItems.toLowerCase())
      );
    });

    setSearchResults(results);
  }, [searchItems, loanData]);

  const handleSearch = (term) => {
    setSearchItems(term);
  };

  const handleFilter = (category) => {
    if (category === "All") {
      setSearchResults(loanData);
      return;
    }
    const filteredResults = loanData.filter(
      (user) => user["status"] === category
    );
    setSelectedCategory(category);

    setSearchResults(filteredResults);
  };

  if (!savedToken) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="overview-container container">
      <div className="explore">
        <p>
          Explore insightful analyses and risk assessment to make informed
          lending decisions.
        </p>
      </div>
      <div className="overview-search-filter">
        <div>
          <DashSearch handleSearch={handleSearch} handleFilter={handleFilter} />
        </div>
        <ChartCards />
        <PaginationTable Tabledata={searchResults} />
      </div>
    </div>
  );
};

export default DashboardOverview;
