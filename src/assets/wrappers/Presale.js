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

          span:nth-child(2) {
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

  @media (max-width: 992px) {
    .header-container {
      button {
        padding: 3.5px 17.52px 5.26px 17.52px;
        border: 1.31px solid black;
        border-radius: 17.96px;
        font-size: 12px;
        line-height: 14.36px;
        box-shadow: -1px 1px black;
      }
    }

    .buy_form {
      h1 {
        font-size: 24px;
        text-shadow: -0.96px 0.96px black;
      }

      .form-container {
        flex-direction: column;
        gap: 1.3em;
        margin-top: 6em;
        margin-bottom: 3em;
        /* height: 323.15px; */

        .form2 {
          width: 347.29px;
          padding: 24px;
          /* background-image: url(${BgImage}); */
          border: 2.01px solid black;
          box-shadow: -2px 2px black;
          border-radius: 16.07px;
          gap: 24px;

          .item {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 35px;
            gap: 16px;
            border-bottom: 2px solid black;
            span {
              font-size: 10.71px;
              line-height: 12.82px;
              letter-spacing: 1.5px;
            }
          }
        }
        .form {
          /* width: 537px; */
          padding: 24px 16px;
          /* background-image: url(${BgImage}); */
          border: 2.01px solid black;
          box-shadow: -2px 2px black;
          border-radius: 16.07px;
          /* gap: 21.43em; */

          button {
            background: #ffda88;
            padding: 10.71px 21.43px;
            border-radius: 16px;
            border: 2.01px solid black;
            font-size: 16.07px;
            line-height: 19.25px;
            letter-spacing: 1.5px;
            box-shadow: -2px 2px black;
          }

          .form-item {
            padding: 16px;
            gap: 21.43px;
            border: 2.01px solid black;
            border-radius: 16.07px;
            label {
              font-size: 10.71px;
              line-height: 12.82px;
              letter-spacing: 1.5px;
            }

            .input-wrapper {
              height: 34.43px;
              input {
                font-size: 10.71px;
                letter-spacing: 1.5px;
                line-height: 12.82px;
                height: 100%;
                width: 70%;
              }

              .input-txt {
                padding: 10.71px;
                border: 2.01px solid black;
                border-radius: 5.36px;
                font-size: 10.71px;
                line-height: 12.82px;
                letter-spacing: 1.5px;
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
