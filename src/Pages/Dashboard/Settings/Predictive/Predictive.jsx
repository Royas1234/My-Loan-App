import React, { useState } from "react";
import EditPage from "./EditModal";
import NewModelPage from "./New";
import "./Predictive.css";
import { FaRegEdit } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import FilledBtn from "../../../../components/Button/FilledBtn";

const Predictive = () => {
  const [toggleStates, setToggleStates] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [editStates, setEditStates] = useState([false, false, false, false]);

  const [model, setModel] = useState(false);

  const toggleBall = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const editModel = (index) => {
    setEditStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const newModel = () => {
    setModel(!model);
  };
  const handleShow = () => {
    setModel(false);
  };
  const handleEdit = (index) => {
    setEditStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false; // Set the current edit state to false
      return newStates;
    });
  };

  return (
    <div className="predictiveModel">
      <div className="top">
        <div className="predictiveItem">
          <div className="title">Bank Statement Name Match</div>
          <div className="toggle-edit">
            <div
              className={`toggle ${toggleStates[0] ? "move" : ""}`}
              onClick={() => toggleBall(0)}
            >
              <span className="toggle-ball"></span>
            </div>
            <div className="edit">
              <FaRegEdit
                color={"#007e99"}
                onClick={() => editModel(0)}
                className="editIcon"
              />
              {editStates[0] && <EditPage handleEdit={() => handleEdit(0)} />}
            </div>
          </div>
        </div>
        <div className="predictiveItem">
          <div className="title">Behavioral Pattern</div>
          <div className="toggle-edit">
            <div
              className={`toggle ${toggleStates[1] ? "move" : ""}`}
              onClick={() => toggleBall(1)}
            >
              <span className="toggle-ball"></span>
            </div>
            <div className="edit">
              <FaRegEdit
                color={"#007e99"}
                onClick={() => editModel(1)}
                className="editIcon"
              />
              {editStates[1] && <EditPage handleEdit={() => handleEdit(1)} />}
            </div>
          </div>
        </div>
        <div className="predictiveItem">
          <div className="title">Spending Pattern</div>
          <div className="toggle-edit">
            <div
              className={`toggle ${toggleStates[2] ? "move" : ""}`}
              onClick={() => toggleBall(2)}
            >
              <span className="toggle-ball"></span>
            </div>
            <div className="edit">
              <FaRegEdit
                color={"#007e99"}
                onClick={() => editModel(2)}
                className="editIcon"
              />
              {editStates[2] && <EditPage handleEdit={() => handleEdit(2)} />}
            </div>
          </div>
        </div>
        <div className="predictiveItem">
          <div className="title">Cash Flow Pattern</div>
          <div className="toggle-edit">
            <div
              className={`toggle ${toggleStates[3] ? "move" : ""}`}
              onClick={() => toggleBall(3)}
            >
              <span className="toggle-ball"></span>
            </div>
            <div className="edit">
              <FaRegEdit
                color={"#007e99"}
                onClick={() => editModel(3)}
                className="editIcon"
              />
              {editStates[3] && <EditPage handleEdit={() => handleEdit(3)} />}
            </div>
          </div>
        </div>
      </div>
      <div className="new-model">
        <FilledBtn
          icon={<BiPlus size={20} />}
          title={"Set new model"}
          onClick={newModel}
        />
        {model && <NewModelPage handleShow={handleShow} />}
      </div>
    </div>
  );
};

export default Predictive;
