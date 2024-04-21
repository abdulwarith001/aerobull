import styled from "styled-components";
import BgImage from "../images/hero2.png";

const Wrapper = styled.section`
  height: 80vh;
  padding: 2em 4em;
  background: url(${BgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: #ddf1ff;
      font-size: 64px;
      font-family: "MilkyNice", sans-serif;
      font-weight: 400;
      text-shadow: 5px 5px black;
    }

    button {
      padding: 8px 40px 12px 40px;
      background: #f7b94f;
      font-size: 32px;
      font-weight: 400;
      color: black;
      font-family: "MilkyNice", sans-serif;
      border-radius: 41px;
      transition: box-shadow 100ms ease-in;
    }
    button:hover {
      box-shadow: -4px -4px black;
    }
  }

  .header-txt {
    display: flex;
    justify-content: flex-end;
    margin: 1.5em auto 0;
    width: 80%;
    .herotxt {
      font-size: 64px;
      text-transform: uppercase;
      color: white;
      text-align: justify;
      font-family: "MilkyNice", sans-serif;
    }

    .firstcomma {
      display: flex;
      gap: 0.3em;
      line-height: 76.61px;
      div {
        text-shadow: 1.5px 1.5px black;
      }
      span {
        color: #f7b94f;
      }
    }

    .secondcomma {
      text-align: right;
      margin-top: -25px;
    }
  }
`;

export default Wrapper;
