import styled from "styled-components";
import BgImage from "../images/footer.png";
const Wrapper = styled.footer`
  background: url(${BgImage});
  /* background-position: center; */
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  padding-left: 5em;
  padding-top: 4em;
  /* height: 1429px; */
  /* width: 1429px; */

  h1 {
    font-size: 110px;
    font-weight: 400;
    line-height: 153.22px;
    color: #ffda88;
    text-shadow: -4px 4px black;
    font-family: "MilkyNice", sans-serif;
  }

  h3 {
    font-size: 48px;
    font-family: "MilkyNice", sans-serif;
    font-weight: 400;
    line-height: 57.46px;
    color: white;
    margin-top: 1.5em;
    text-shadow: -2px 2px black;
    -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
  }

  .icons {
    width: fit-content;
    display: flex;
    gap: 24px;
    margin-top: 3em;
    align-items: center;

    .icon {
      cursor: pointer;
      padding: 23.57px;
      border: 2.95px solid black;
      border-radius: 15.71px;
      transition: box-shadow 100ms ease-out;
      background: white;
    }
    .icon:hover {
      box-shadow: -4px 4px black;
    }
  }

  .buy_btn {
    background: #0699f9;
    padding: 0 16px;
    border-radius: 56px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 344px;
    height: 104px;
    margin-top: 5em;
    transition: box-shadow 100ms ease-out;
    cursor: pointer;

    p {
      font-family: "Sora", sans-serif;
      line-height: 50.4px;
      font-size: 40px;
    }
  }

  .buy_btn:hover {
    box-shadow: -6px 6px black;
  }

  .web_link {
    height: 15em;
    width: fit-content;
    h4 {
      color: white;
      -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
      font-size: 36px;
      font-weight: 400;
      line-height: 43.09px;
      text-shadow: -2px 2px black;
      font-family: "MilkyNice", sans-serif;
      margin: 8em 0;
    }
  }
`;

export default Wrapper;
