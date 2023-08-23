import React, { useState } from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import DashboardHeader from "../../../../components/SideBar/DashboardHeader";
import "./UserPreference.css";
import { useNavigate } from "react-router-dom";

const UserPreference = () => {
  const [back] = useState(true);
  const navigate = useNavigate();
  const backLink = () => navigate("/dashboard/settings");
  const [ballToggle, setBallToggle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleBall = (index) => {
    setBallToggle((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="dashboard-wrapper">
      <DashboardHeader back={back} backLink={backLink} />
      <div className="dashboard-body">
        <SideBar />
        <div className="dashboard-pages-wrapper">
          <div className="userPref">
            <div className="userTitle">
              <h1>User Preference</h1>
            </div>
            <div className="textToggle">
              <div className="text">
                <h4>Transparent Sidebar</h4>
                <p>Make the desktop sidebar transparent</p>
              </div>
              <div
                className={`toggle ${ballToggle[0] ? "move" : ""}`}
                onClick={() => toggleBall(0)}
              >
                <span className="toggle-ball"></span>
              </div>
            </div>
            <div className="text">
              <h4>Notification Settings</h4>
              <p>
                We may still send you important notifications outside of your
                notification settings
              </p>
            </div>
            <div className="textToggles-border">
              <div className="border-textToggle">
                <div className="borderText">
                  <h4>Tags</h4>
                  <p>
                    These are notifications for when someone tags you in a
                    comment or message
                  </p>
                </div>
                <div className="borderToggles">
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[1] ? "move" : ""}`}
                      onClick={() => toggleBall(1)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>Push</span>
                  </div>
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[2] ? "move" : ""}`}
                      onClick={() => toggleBall(2)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>Email</span>
                  </div>
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[3] ? "move" : ""}`}
                      onClick={() => toggleBall(3)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>SMS</span>
                  </div>
                </div>
              </div>
              <div className="border-textToggle">
                <div className="borderText">
                  <h4>Reminders</h4>
                  <p>
                    These are notifications to remind you of updates you might
                    have missed
                  </p>
                </div>
                <div className="borderToggles">
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[4] ? "move" : ""}`}
                      onClick={() => toggleBall(4)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>Push</span>
                  </div>
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[5] ? "move" : ""}`}
                      onClick={() => toggleBall(5)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>Email</span>
                  </div>
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[6] ? "move" : ""}`}
                      onClick={() => toggleBall(6)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>SMS</span>
                  </div>
                </div>
              </div>
              <div className="border-textToggle">
                <div className="borderText">
                  <h4>Comments</h4>
                  <p>
                    These are notifications for when someone comments on your
                    posts
                  </p>
                </div>
                <div className="borderToggles">
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[7] ? "move" : ""}`}
                      onClick={() => toggleBall(7)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>Push</span>
                  </div>
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[8] ? "move" : ""}`}
                      onClick={() => toggleBall(8)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>Email</span>
                  </div>
                  <div className="borderToggle">
                    <div
                      className={`toggle ${ballToggle[9] ? "move" : ""}`}
                      onClick={() => toggleBall(9)}
                    >
                      <span className="toggle-ball"></span>
                    </div>
                    <span>SMS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribeBorder">
              <div className="subscribeTitle">
                <h4>We've just launched. Keep in touch!</h4>
                <p>
                  Check out the all-new dashboard view. Pages now load faster.
                </p>
              </div>
              <div className="subInput">
                <p>Subscribe to updates</p>
                <input type="email" placeholder="Enter Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreference;
