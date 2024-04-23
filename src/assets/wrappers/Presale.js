import styled from "styled-components";
import BgImage from "../images/body_pattern.svg";

const Wrapper = styled.section`
  padding: 3em;

  .header-container {
    text-align: right;

    button {
      background: #f7b94f;
      border-radius: 41px;
      padding: 8px 40px 12px 40px;
      border: 2px solid black;
      box-shadow: -3px 3px black;
      font-family: "MilkyNice", sans-serif;
      font-size: 32px;
      line-height: 38.3px;
      font-weight: 400;
    }
  }

  .buy_form {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #0699f9;
      font-size: 64px;
      line-height: 6.61px;
      font-family: "MilkyNice", sans-serif;
      -webkit-text-stroke: 1px black;
      text-shadow: -4px 4px black;
    }

    .form-container {
      /* background: red; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.3em;
      margin-top: 4em;
      height: 633px;

      .form2 {
        /* width: 537px; */
        padding: 88px 72px;
        /* background-image: url(${BgImage}); */
        background-color: white;
        border: 3px solid black;
        box-shadow: -4px 4px black;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        gap: 48px;

        .item {
          display: flex;
          justify-content: space-between;
          width: 393px;
          height: 35px;
          gap: 16px;
          border-bottom: 2px solid black;
          span {
            font-size: 16px;
            font-weight: 400;
            line-height: 19.15px;
            letter-spacing: 3px;
            color: #747474;
            font-family: "MilkyNice", sans-serif;
            text-transform: uppercase;
          }

          span:nth-child(2){
            color: black;
          }
        }
      }
      .form {
        /* width: 537px; */
        padding: 88px 72px;
        /* background-image: url(${BgImage}); */
        background-color: white;
        border: 3px solid black;
        box-shadow: -4px 4px black;
        border-radius: 24px;
        display: flex;
        gap: 1.8em;
        flex-direction: column;

        button {
          background: #ffda88;
          padding: 16px 32px;
          border-radius: 16px;
          border: 3px solid black;
          font-size: 24px;
          line-height: 28.73px;
          letter-spacing: 3px;
          font-family: "MilkyNice", sans-serif;
          font-weight: 400;
          box-shadow: -4px 4px black;
        }

        .form-item {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          border: 3px solid black;
          border-radius: 24px;
          label {
            text-transform: uppercase;
            font-size: 16px;
            line-height: 19.15px;
            font-weight: 400;
            font-family: "MilkyNice", sans-serif;
            letter-spacing: 3px;
          }

          .input-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 329px;
            height: 51px;
            input {
              font-size: 16px;
              font-family: "MilkyNice", sans-serif;
              font-weight: 400;
              letter-spacing: 3px;
              line-height: 19.15px;
              border: none;
              outline: none;
              background: transparent;
              height: 100%;
              width: 70%;
            }

            .input-txt {
              padding: 16px;
              border: 3px solid black;
              background: white;
              border-radius: 8px;
              font-size: 16px;
              line-height: 19.15px;
              letter-spacing: 3px;
              font-family: "MilkyNice", sans-serif;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
