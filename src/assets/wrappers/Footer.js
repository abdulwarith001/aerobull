import styled from "styled-components";
import BgImage from "../images/footer.png";
const Wrapper = styled.footer`
  padding-left: 5em;
  padding-top: 4em;
  display: flex;
  justify-content: space-between;

  .image{
    display: block;
    width: 40%;
    height: 40%;
    object-fit: contain;
  }

  .image2{
    display: none;
  }

  h1 {
    font-size: 110px;
    font-weight: 400;
    line-height: 153.22px;
    color: #ffda88;
    text-shadow: -4px 4px black;
    font-family: "MilkyNice", sans-serif;
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

  .contents{
    padding-bottom: 4em;
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
    margin-top: 3em;
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
      margin: 4em 0;
    }
  }

  @media (max-width: 992px) {
    /* display: none; */
    padding-left: 2em;
    padding-top: 2em;
    h1 {
      font-size: 39.4px;
      line-height: 47.16px;
      text-shadow: -2px 2px black;
    }

    h3 {
      font-size: 14.78px;
      line-height: 17.69px;
      margin-top: 1em;
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
      padding: 0 4.93px;
      border-radius: 17.25px;
      border: 1.5px solid black;
      gap: 7.39px;
      width: 105.79px;
      height: 32.01px;
      margin-top: 3em;

      p {
        line-height: 15.51px;
        font-size: 12.31px;
      }
    }
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }

    .web_link {
      height: 7em;
      width: fit-content;
      h4 {
        font-size: 11.08px;
        line-height: 13.26px;
        text-shadow: -0.5px 0.5px black;
        margin: 4em 0;
      }
    }
     .image2{
      display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
     .image{
    display: none;
  }
  }
`;

export default Wrapper;
