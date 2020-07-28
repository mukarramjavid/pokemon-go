import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [moveName, setMoveName] = useState();
  const [show, setShow] = useState(null);

  //set value of num
  const setValue = (e) => {
    setNum(e.target.value);
    setShow(e.target.value);
  };
  // Get Data From API
  useEffect(() => {
    // alert("hi");
    async function getData() {
      const request = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      setName(request.data.name);
      //console.log(Object.values(request.data.moves[0].move));
      setMoves(request.data.moves.length);
      setMoveName(Object.values(request.data.moves[0].move.name));
    }
    getData();
  });

  return (
    <>
      <Container>
        {/* First Row */}
        {show ? (
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <h1 className="header_title">You choose {num}</h1>
            </Col>
            <Col md={3}></Col>
          </Row>
        ) : null}
        {/* Second Row */}
        <Row>
          <Col md={4}></Col>
          <Col md={4} className="text-center">
            <select value={num} onChange={setValue} className="form-control">
              <option value="0" className="active">
                --Select your Number--
              </option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="25">25</option>
            </select>
          </Col>
          <Col md={4}></Col>
        </Row>
        <br />
        {/* Third Row */}
        {show ? (
          <Row>
            <Col md={3}></Col>
            <Col md={6} className="text-center">
              <h1 className="header_title">
                Pokemon Character: Name is{" "}
                <span className="span-tag"> {name} </span>and
                <span className="span-tag"> {moves} </span>moves and first move
                is <span className="span-tag"> {moveName}</span>.
              </h1>
              {/* <h1 className="header_title">{moves}</h1> */}
            </Col>
            <Col md={3}></Col>
          </Row>
        ) : null}
      </Container>
    </>
  );
};
export default Pokemon;
