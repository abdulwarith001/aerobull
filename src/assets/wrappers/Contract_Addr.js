import styled from "styled-components";

const Wrapper = styled.section`
  background: #77c5fc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  padding: 3em 0 6em;

  h1 {
    font-size: 58.01px;
    font-weight: 400;
    line-height: 69.44px;
    text-shadow: 4px 4px black;
    font-family: "MilkyNice", sans-serif;
    color: white;
    text-transform: uppercase;
  }

  .inputWrapper {
    background: white;
    border: 3px solid black;
    height: 72px;
    width: 868px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 56px;
    gap: 24px;
    margin-top: 1em;
    box-shadow: -4px 4px black;

    padding: 16px;
    input {
      background: transparent;
      border: none;
      outline: none;
      font-family: "Sora", sans-serif;
      font-size: 32px;
      line-height: 40.32px;
      font-weight: 600;
      width: 625px;
      height: 40px;
    }

    button {
      width: 195px;
      height: 72px;
      background: #222222;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      border-radius: 56px;
      gap: 10px;
      font-size: 32px;
      font-weight: 400;
      line-height: 40.32px;
      outline: none;
      transition: box-shadow 500ms ease-out;
      border: none;
    }

    button:hover {
      box-shadow: -8px 8px black;
    }
  }
`;

export default Wrapper;
