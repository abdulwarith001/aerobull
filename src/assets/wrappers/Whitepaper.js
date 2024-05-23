import styled from "styled-components";
import whitepaper_bg from "../images/whitepaper_bg.png";

const Wrapper = styled.section`
  background: url(${whitepaper_bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6em 0;

  h1 {
    font-size: 58.01px;
    font-weight: 400;
    line-height: 69.44px;
    text-shadow: 4px 4px black;
    font-family: "MilkyNice", sans-serif;
    color: white;
    text-transform: uppercase;
    text-stroke: 1px black;
    -webkit-text-stroke: 1px black;
  }
  h4 {
    font-size: 40px;
    font-weight: 400;
    line-height: 47.88px;
    text-shadow: 2px 2px black;
    font-family: "MilkyNice", sans-serif;
    color: white;
    margin-bottom: 3em;
    margin-top: 2em;
    text-stroke: 1px black;
    -webkit-text-stroke: 1px black;
  }

  button {
    background: white;
    border: 3px solid black;
    height: 78.66px;
    width: 518px;
    border-radius: 56px;
    box-shadow: -4px 4px black;
    font-size: 38.37px;
    line-height: 48.37px;
    font-family: "Sora", sans-serif;
    font-weight: 800;
    padding: 15.37px 38.37px;
  }
`;

export default Wrapper