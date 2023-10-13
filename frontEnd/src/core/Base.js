import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "Owesome products",
  description = "Select and order the products",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className="bg-dark text-white p-1">{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container text-center">
        <span className="text-muted">
          Amazing <span className="text-white">Products</span> Store , Select which amazes you.
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
