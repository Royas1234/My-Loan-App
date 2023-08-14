import React from "react";
import FilledBtn from "../../../components/Button/FilledBtn";
import { useNavigate } from "react-router-dom";

const GetStarted = ({ title, content }) => {
  const navigate = useNavigate();

  return (
    <div className="get-Started">
      <h3>{title}</h3>
      <p>{content}</p>
      <FilledBtn
        title={"Get Started"}
        onClick={() => navigate("/create-account")}
      />
    </div>
  );
};

export default GetStarted;
