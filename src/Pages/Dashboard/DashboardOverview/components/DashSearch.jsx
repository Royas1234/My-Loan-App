import React, { useState } from "react";
// import FilledBtn from "../../../../components/Button/FilledBtn";
import dateArrow from "../../../../Images/Dashboard/datearrow.svg";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from "../../../../components/Overview/SearchBar";
import "../dashboard.css";
import DashboardFilter from "../../../../components/Overview/DashboardFilter";

const DashSearch = ({ handleSearch, handleFilter}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const currentDate = selectedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // const button = <FilledBtn title={"Search"} type="submit" />

  return (
    <div className="dash__titleSearch">
      <div className="dash__searchFilterDate">
        <div className="dash__searchFilter">
          <SearchBar handleSearch={handleSearch} />
          <DashboardFilter handleFilter={handleFilter}/>
          <div
              className="dash__date-small"
            >
              <div
                className="img-date"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <img src={dateArrow} alt="date Arrow" />
                <p>{currentDate}</p>
              </div>
              <div className="calender">
                {showCalendar && (
                  <div className="calender">
                    <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      dateFormat="dd/mm/yyyy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div> 
        </div>
    </div>
  );
};

export default DashSearch;
