import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
  padding: 3em 10em;
  background-color: #d2ecff;

  h1 {
    font-size: 64.01px;
    font-weight: 400;
    line-height: 69.44px;
    text-shadow: 4px 4px black;
    font-family: "MilkyNice", sans-serif;
    color: #0699f9;
    width: 60%;
    -webkit-text-stroke: 1px black;
  }

  button {
    padding: 8px 40px 12px 40px;
    background: #0699f9;
    font-size: 32px;
    font-weight: 400;
    color: white;
    font-family: "MilkyNice", sans-serif;
    border-radius: 41px;
    box-shadow: -4px 4px black;
    transition: box-shadow 100ms ease-in;
    border: 1px solid black;
  }
`;

export default Wrapper