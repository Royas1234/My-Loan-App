import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../../components/Overview/overview.css";
import lessthan from "../../../../../Images/Dashboard/lessthan.svg";
import greaterthan from "../../../../../Images/Dashboard/greaterthan.svg";
import FilledBtn from "../../../../../components/Button/FilledBtn";

const DATA_PER_PAGE = 5;

const PortfolioPaginationTable = ({ data }) => {
 const [currentPage, setCurrentPage] = useState(1);
 const [isActive, setIsActive] = useState(false);

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
  setIsActive(!isActive);
 };
 const totalCount = data.length;
 const indexOfLastData = currentPage * DATA_PER_PAGE;
 const indexOfFirstData = indexOfLastData - DATA_PER_PAGE;
 const currentData = data.slice(indexOfFirstData, indexOfLastData);

 const navigate = useNavigate();

 const handleClick = () => {
  navigate("/dashboard/customerpage");
 };

 return (
  <div className="table-wrapper">
   <div className="performance-wrapper">
    <h3>Portfolio Overview</h3>
    <FilledBtn title="Download" />
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
      <tr key={index} onClick={handleClick} className="table-body-container">
       <td>{item.customer_id}</td>
       <td>{item.fullName}</td>
       <td>{item.Category}</td>
       <td>N{item.Disbursed}</td>
       <td>{item["due_date"]}</td>
       <td className={`${item["loan_status_2"]}`}>
        <button>{item["loan_status_2"]}</button>
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

export default PortfolioPaginationTable;
