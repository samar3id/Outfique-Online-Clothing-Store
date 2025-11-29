import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "6rem", marginBottom: "20px" }}>404</h1>
      <h2 style={{ marginBottom: "20px" }}>Oops! Page Not Found</h2>
      <p style={{ marginBottom: "30px" }}>The page you are looking for does not exist.</p>
      <Link to="/" style={{
        textDecoration: "none",
        padding: "10px 20px",
        backgroundColor: "#68b3be",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold"
      }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default Page404;
