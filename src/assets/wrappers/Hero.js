import styled from "styled-components";
import BgImage from "../images/hero_back.png";
import BgImage2 from "../images/hero.png";

const Wrapper = styled.section`
  /* height: 100vh; */
  background: url(${BgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  /* z-index: 9999; */

  .firstSection {
    padding: 2em 4em;
    height: 80vh;
    background: url(${BgImage2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
  }

  .milkyguy {
    margin: -10em 0 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
    h1 {
      color: #3fadfb;
      -webkit-text-stroke: 1px #15344a;
      text-shadow: -5px 5px #15344a; /* For WebKit browsers like Chrome and Safari */
      font-size: 180px;
      line-height: 1;
      font-weight: 400;
      font-family: "MilkyNice", sans-serif;
      text-transform: uppercase;
    }
  }

  @media (max-width: 992px) {
    .milkyguy {
      margin: -12em 0 0;

      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }
      h1 {
        display: none;
      }
    }
  }

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
    margin: 2em auto 0;
    width: 80%;
    .herotxt {
      font-size: 76px;
      text-transform: uppercase;
      color: white;
      text-align: justify;
      letter-spacing: 1px;
      font-family: "MilkyNice", sans-serif;
    }

    .firstcomma {
      display: flex;
      gap: 0.3em;
      /* line-height: 76.61px; */
      div {
        text-shadow: 1.5px 1.5px black;
      }
      span {
        color: #f7b94f;
      }
    }
  }
  .secondcomma {
    text-align: right;
    margin-top: -25px;
    font-size: 64px;
  }

  @media (max-width: 992px) {
    height: fit-content;
    padding: 0 0 1em;
    .header {
      h2 {
        font-size: 20.8px;
      }

      button {
        padding: 8px 40px 12px;
        font-size: 14.02px;
      }
    }

    .milkyguy {
      margin: -10em 11em 0 0;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;

      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }
      h1 {
        color: #3fadfb;
        -webkit-text-stroke: 1px #15344a;
        text-shadow: -5px 5px #15344a; /* For WebKit browsers like Chrome and Safari */
        font-size: 180px;
        line-height: 1;
        font-weight: 400;
        font-family: "MilkyNice", sans-serif;
        text-transform: uppercase;
      }
    }

    .firstSection {
      padding: 2em 2em;
      height: 40vh;
      background: url(${BgImage2});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      object-fit: cover;
    }

    .header-txt {
      display: flex;
      // justify-content: flex-end;
      margin: 0.5em auto 0;
      width: 100%;
      .herotxt {
        font-size: 70px;
        text-transform: uppercase;
        color: white;
        /* text-align: justify; */
        letter-spacing: 1px;
        font-family: "MilkyNice", sans-serif;
      }

      .firstcomma {
        font-size: 23.61px;
        line-height: 28.26px;
        margin-top: 2em;
        /* text-transform: uppercase;
      color: white;
      text-align: justify;
      font-family: "MilkyNice", sans-serif; */
      }
    }
    .secondcomma {
      font-size: 23.61px;
    }
  }
`;

export default Wrapper;
