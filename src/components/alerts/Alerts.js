import React from "react";
import "./alert.css";

const Alerts = ({ show, success }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={success ? "success" : "failure"}>
      <p>
        {success
          ? "Message sent!"
          : "Please ensure to fill out all feilds in the form."}
      </p>
    </div>
  );
};

export default Alerts;
