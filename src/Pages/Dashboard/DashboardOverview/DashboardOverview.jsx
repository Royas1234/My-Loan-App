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
  // const [displayLoanCards, setDisplayLoanCards] = useState("");
  const categoryStateArray = useState("");
  const setSelectedCategory = categoryStateArray[1];

  const savedToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/dashboard/loans`, savedToken)
      .then((response) => {
        if (response.status === 200) {
          console.log({ response });
        }
        // setDisplayLoanCards(response.data)
      })
      .catch((error) => {
        if (error.response.status === 401) {
          <Navigate to="/login" />;
          console.log(error.response.data.message);
        }
      });
  }, [savedToken]);

  useEffect(() => {
    axios
      .get("https://loanwise.onrender.com/api/loan-table")
      .then((response) => {
        setSearchResults(response.data);
        setLoanData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const results = loanData.filter((user) => {
      return (
        user.fullName.toLowerCase().includes(searchItems.toLowerCase()) ||
        user.customer_id.toLowerCase().includes(searchItems.toLowerCase())
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
      (user) => user["loan_status"] === category
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
        <PaginationTable data={searchResults} />
      </div>
    </div>
  );
};

export default DashboardOverview;
