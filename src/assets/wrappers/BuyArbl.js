import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
  padding: 5em 10em;
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

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 5em 1em;
    h1 {
      font-size: 27.53px;
      line-height: 30.38px;
    }

    button {
      width: 60.32px;
      height: 21.85px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      border-radius: 17.25px;
      gap: 3.02px;
      font-size: 15px;
      line-height: 12.41px;
    }
  }
`;

export default Wrapper