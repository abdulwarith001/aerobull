import styled from "styled-components";
import BgImage from "../images/hero_back.png";
import presale_bg from "../images/Frame 68.png";
import presale_bg2 from "../images/presale_bg2.png";



const Wrapper = styled.section`
  padding-top: 3em;
  background: url(${BgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;

  .header-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 3em;

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
      display: flex;
      justify-content: center;
      gap: 0.5em;
    }
  }

  .footer-img {
    display: flex;
    justify-content: flex-end;
  }

  .top-and-down {
    display: flex;
    gap: 0.2em;
    align-items: center;
    img {
      cursor: pointer;
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

    h3 {
      margin-top: 3em;
      display: flex;
      align-items: center;
      color: white;
      font-family: "MilkyNice", sans-serif;
      text-shadow: -3px 3px black;
      -webkit-text-stroke: 1px black;
      font-size: 25px;
      line-height: 19.51px;
      font-weight: 400;
      gap: 10px;
      span {
        color: #d7a672;
        /* margin: 0 10px; */
      }
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
        height: 648.88px;
        width: 505px;
        background-image: url(${presale_bg});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;
        border-radius: 24px;
        border: 3px solid black;
        box-shadow: -4px 4px black;
        /* width: 537px; */
        /* padding: 88px 72px;
        background-color: white;
        /*  *
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
            color: white;
          }
        } */
      }
      .form3 {
        padding: 88px 72px;
        margin-top: 1em;
        background-image: url(${presale_bg});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;
        background-color: white;
        border: 3px solid black;
        box-shadow: -4px 4px black;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        gap: 48px;

        .txt-container {
          text-align: center;
          font-weight: 400;
          font-size: 64px;
          letter-spacing: 2px;
          color: #f7b94f;
          line-height: 76.61px;
          font-family: "MilkyNice", sans-serif;
          -webkit-text-stroke: 1px black;
          text-shadow: -3px 3px black; /* For WebKit browsers like Chrome and Safari */
          span {
            color: white;
          }
        }

        .item {
          display: flex;
          justify-content: space-between;
          /* width: 393px; */
          /* height: 35px; */
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
            color: white;
          }
        }
      }
      .form {
        /* width: 537px; */
        padding: 88px 72px;
        background-image: url(${presale_bg2});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;
        background-color: white;
        border: 3px solid black;
        box-shadow: -4px 4px black;
        border-radius: 24px;
        display: flex;
        gap: 1.8em;
        flex-direction: column;

        button {
          background: #0699f9;
          color: white;
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
          background-color: rgba(255, 255, 255, 0.66);
          label {
            text-transform: uppercase;
            font-size: 16px;
            line-height: 19.15px;
            font-weight: 400;
            font-family: "MilkyNice", sans-serif;
            letter-spacing: 3px;
          }
          .error-txt {
            color: red;
            text-transform: uppercase;
            font-size: 16px;
            line-height: 19.15px;
            font-weight: 400;
            font-family: "MilkyNice", sans-serif;
            letter-spacing: 3px;
            text-align: center;
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

            p {
              color: #a9a9a9;
              font-size: 12px;
              font-weight: 400;
              font-family: "MilkyNice", sans-serif;
              line-height: 14.36px;
              margin-top: 0.5em;
              letter-spacing: 1px;
            }

            .input-txt {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
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
    padding: 1em;
    .header-container {
      padding-right: 0.5em;
      button {
        padding: 7.5px 12.52px;
        border: 1.31px solid black;
        border-radius: 17.96px;
        font-size: 16px;
        line-height: 14.36px;
        box-shadow: -1px 1px black;
      }
    }
    .footer-img {
      display: flex;
      justify-content: center;
      img{
        width: 40%; 
      }
    }

    

    .buy_form {
      h1 {
        font-size: 35px;
        text-shadow: -0.96px 0.96px black;
      }

      .form-container {
        flex-direction: column;
        gap: 1.3em;
        margin-top: 6em;
        margin-bottom: 3em;
        /* height: 323.15px; */

        .form2 {
          width: 300.29px;
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
              font-size: 15.71px;
              line-height: 12.82px;
              letter-spacing: 1.5px;
            }
          }
        }
        .form3 {
          width: 310.29px;
          padding: 24px;
          /* background-image: url(${BgImage}); */
          border: 2.01px solid black;
          box-shadow: -2px 2px black;
          border-radius: 16.07px;
          gap: 24px;
          margin-top: -6em;
          .txt-container {
            font-size: 24px;
            text-shadow: 1px 1px black;
          }

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
          width: 310.29px;

          padding: 24px 16px;
          /* background-image: url(${BgImage}); */
          border: 2.01px solid black;
          box-shadow: -2px 2px black;
          border-radius: 16.07px;
          /* gap: 21.43em; */

          button {
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
            gap: 15.43px;
            border: 2.01px solid black;
            border-radius: 16.07px;
            label {
              font-size: 15.71px;
              line-height: 18.82px;
              letter-spacing: 1.5px;
            }

            .input-wrapper {
              height: 34.43px;
              width: fit-content;
              input {
                font-size: 15.71px;
                letter-spacing: 1.5px;
                line-height: 18.82px;
                height: 100%;
                width: 70%;
              }

              .input-txt {
                gap: 4px;
                padding: 5px;
                border: 3px solid black;
                background: white;
                border-radius: 8px;
                font-size: 12px;
                line-height: 19.15px;
                letter-spacing: 3px;
                font-family: "MilkyNice", sans-serif;
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
