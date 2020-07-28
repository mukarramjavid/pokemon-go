import React from "react";
import { Alert } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      <Alert variant="success" className="title">
        <Alert.Link
          href="https://pokeapi.co/"
          target="_blank"
          className="anchor"
        >
          Pokemon
        </Alert.Link>{" "}
        Go API.
      </Alert>
    </>
  );
};
export default Navbar;
