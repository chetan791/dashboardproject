import React, { useMemo, useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import styled from "styled-components";
import hamburger from "../src/assets/hamburger.png";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const memoizedContent = useMemo(() => <Content />, []);

  return (
    <>
      <HAMBURGER onClick={() => setShowSidebar(!showSidebar)}>
        <img src={hamburger} alt="Hamburger" />
      </HAMBURGER>
      {showSidebar ? (
        <HamburgerMenu>
          <select>
            <option value="" selected>
              Energy
            </option>
            <option value="">category 1</option>
            <option value="">category 2</option>
            <option value="">category 3</option>
          </select>
          <h2>Energy</h2>
          <h2>
            Waste <span style={{ color: "green" }}>(βeta)</span>
          </h2>
        </HamburgerMenu>
      ) : null}
      <div style={{ display: "flex", width: "100%" }}>
        <StyldSidebar>
          <Sidebar />
        </StyldSidebar>
        {memoizedContent}
      </div>
    </>
  );
}

export default App;

const StyldSidebar = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const HAMBURGER = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }

  position: absolute;

  img {
    width: 35px;
    height: 40px;
  }
  top: 10px;
  left: 0;

  &:hover {
    cursor: pointer;
  }
  z-index: 100;
`;

const HamburgerMenu = styled.div`
  position: absolute;

  @media screen and (min-width: 601px) {
    display: none;
  }
`;
