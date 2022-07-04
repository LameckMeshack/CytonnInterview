import React from "react";

const ErrorMsgBox = ({ errorMsg }) => {
  return (
    <div>
      {" "}
      <div className="error">
        <p>{errorMsg}</p>
      </div>
    </div>
  );
};

export default ErrorMsgBox;
