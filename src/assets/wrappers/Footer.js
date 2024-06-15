import styled from "styled-components";
import BgImage from "../images/footer.png";
const Wrapper = styled.footer`
  padding-left: 5em;
  padding-top: 4em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: #77c5fc;

  .buy_arbl {
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

  .image {
    display: block;
    width: 40%;
    height: 40%;
    object-fit: contain;
  }

  .image2 {
    display: none;
  }

  h1 {
    font-size: 110px;
    font-weight: 400;
    line-height: 153.22px;
    color: #ffda88;
    text-shadow: -4px 4px black;
    font-family: "MilkyNice", sans-serif;
    -webkit-text-stroke: 1px black;
  }

  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }

  h3 {
    font-size: 48px;
    font-family: "MilkyNice", sans-serif;
    font-weight: 400;
    line-height: 57.46px;
    color: white;
    margin-top: 1em;
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

  .contents {
    padding-bottom: 4em;
  }

  .buy_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 2em;
    button {
      padding: 8px 40px 12px 40px;
      background: #f7b94f;
      font-size: 32px;
      font-weight: 400;
      color: black;
      font-family: "MilkyNice", sans-serif;
      border-radius: 41px;
      box-shadow: -4px 4px black;
      transition: box-shadow 100ms ease-in;
      border: none;
    }
  }

  .web_link {
    height: 5em;
    width: fit-content;
    text-decoration: none;
    h4 {
      color: white;
      -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
      font-size: 36px;
      font-weight: 400;
      line-height: 43.09px;
      text-shadow: -2px 2px black;
      font-family: "MilkyNice", sans-serif;
      margin: 2em 0;
    }
  }

  @media (max-width: 992px) {
    /* display: none; */
    padding-left: 2em;
    padding-top: 1em;
    h1 {
      font-size: 45.4px;
      line-height: 55.16px;
      text-shadow: -2px 2px black;
    }

    h3 {
      font-size: 17.78px;
      line-height: 23.69px;
      margin-top: 0.5em;
      text-shadow: -2px 2px black;
      -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
    }

    .icons {
      gap: 7.39px;
      margin-top: 2em;

      .icon {
        padding: 7.25px;
        border: 0.96px solid black;
        border-radius: 4.84px;
        box-shadow: -1.9px 1.9px black;
      }
    }

    .buy_btn {
      height: fit-content;
      margin-top: 3em;

      button {
        padding: 8px 40px 12px;
        font-size: 14.02px;
      }
    }
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }

    .web_link {
      height: 1em;
      width: fit-content;
      h4 {
        font-size: 15.08px;
        line-height: 17.26px;
        text-shadow: -0.5px 0.5px black;
        margin: 4em 0;
      }
    }
    .image2 {
      display: block;
      width: 30%;
      margin-left: -2em;
      height: 100%;
      object-fit: contain;
      /* margin-left: -3em; */
    }
    .image {
      display: none;
    }
  }
`;

export default Wrapper;
