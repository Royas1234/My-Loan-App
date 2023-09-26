import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./overview.css";
import Papa from "papaparse";
import lessthan from "../../Images/Dashboard/lessthan.svg";
import greaterthan from "../../Images/Dashboard/greaterthan.svg";
import FilledBtn from "../Button/FilledBtn";

const DATA_PER_PAGE = 5;

const PaginationTable = ({ Tabledata }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const totalCount = Tabledata.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setIsActive(!isActive);
  };

  const indexOfLastData = currentPage * DATA_PER_PAGE;
  const indexOfFirstData = indexOfLastData - DATA_PER_PAGE;
  const currentData =
    totalCount < DATA_PER_PAGE
      ? Tabledata
      : Tabledata.slice(indexOfFirstData, indexOfLastData);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/customerpage");
  };

  const handleDownload = () => {
    const csvData = Papa.unparse(Tabledata, { header: true });
    const blob = new Blob([csvData], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "loan_performance.csv";
    link.click();

    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="table-wrapper">
      <div className="performance-wrapper">
        <h3>Loan Performance Table</h3>
        <FilledBtn title={"Download"} onClick={handleDownload} />
      </div>
      <table>
        <thead>
          <tr className="table-head-container">
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              onClick={handleClick}
              className="table-body-container"
            >
              <td>{item.loanId}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>N{item.amount}</td>

              <td>{new Date(item.dueDate).toLocaleDateString()}</td>

              <td className={`${item["status"]}`}>
                <button>{item["status"]}</button>
              </td>
            </tr>
          ))}
        </tbody>
        {totalCount >= DATA_PER_PAGE && (
          <tfoot className="pagination-wrapper">
            <tr>
              <td colSpan="6">
                <ul className="pagination">
                  <div className="left-paginate">
                    <li className="paginate">
                      <a href="/">View all Loan history</a>
                    </li>
                  </div>
                  <div className="right-paginate">
                    <li>
                      <img
                        src={greaterthan}
                        alt="a less than icon"
                        className="paginate-img"
                      />
                    </li>
                    {Array.from({
                      length: Math.ceil(totalCount / DATA_PER_PAGE),
                    }).map((_, index) => (
                      <li key={index}>
                        <button
                          className={`paginate-btn ${
                            currentPage === index + 1 ? "button-active" : ""
                          }`}
                          onClick={() => {
                            paginate(index + 1);
                          }}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                    <li>
                      {" "}
                      <img
                        src={lessthan}
                        alt="a greater than icon"
                        className="paginate-img"
                      />
                    </li>
                  </div>
                </ul>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default PaginationTable;
