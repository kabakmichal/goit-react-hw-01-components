import PropTypes from "prop-types";

const App = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
        padding: "50px 10px",
      }}
    >
      {children}
    </div>
  );
};

export default App;

App.propTypes = {
  children: PropTypes.array.isRequired,
};
