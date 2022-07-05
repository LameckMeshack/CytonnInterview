const ErrorMsgBox = ({ errorMsg, closeMsg }) => {
  return (
    <div>
      <div className="error">
        <p>{errorMsg}</p>
        <img
          onClick={closeMsg}
          src={require("../assets/close.png")}
          alt="error"
        />
      </div>
    </div>
  );
};

export default ErrorMsgBox;
