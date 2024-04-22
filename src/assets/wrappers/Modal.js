import styled from "styled-components";
import BgImage from "../images/body_pattern.svg";

const WinnerErrorWrapper = styled.section`
  .show {
    animation: openModal 1s forwards;
  }
  .hide {
    background: yellow;
  }

  @keyframes openModal {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes closeModal {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 500ms ease-in-out;
    z-index: 9999;
  }
  .model-content {
    background-color: white;
    border: 2px solid black;
    border-radius: 24px;
    width: 812px;
    /* position: relative; */

    .img_wrapper {
      text-align: right;
      margin-top: -0.9em;
      margin-right: -1em;
      img {
        width: 8%;
        cursor: pointer;
      }
    }

    .content {
      /* padding: 88px; */
      text-align: center;
      h1 {
        color: #0699f9;
        text-shadow: -6px 6px black;
        -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
        font-size: 64px;
        line-height: 76.61px;
        font-weight: 400;
        font-family: "MilkyNice", sans-serif;
      }

      h4 {
        margin-top: 1.5em;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.15px;
        font-family: "MilkyNice", sans-serif;
        color: black;
        letter-spacing: 5px;
      }

      .timer_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        margin: 2.5em auto 3.5em;

        h3 {
          font-size: 50px;
          color: black;
        }

        .timer {
          padding: 16px 24px;
          background: #f7b94f;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 3px solid black;
          border-radius: 16px;
          box-shadow: -6px 6px black;
          flex-direction: column;
          h2 {
            font-size: 64px;
            line-height: 76.61px;
            font-weight: 400;
            font-family: "MilkyNice", sans-serif;
          }
          p {
            font-size: 16px;
            font-weight: 600;
            font-family: "Sora", sans-serif;
            line-height: 17.64px;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .model-content {
      border-radius: 9.47px;
      width: 320.55px;
      /* position: relative; */

      .img_wrapper {
        text-align: right;
        margin-top: -0.9em;
        margin-right: -1em;
        img {
          width: 8%;
          cursor: pointer;
        }
      }

      .content {
        /* padding: 88px; */
        text-align: center;
        h1 {
          text-shadow: -2px 2px black;
          font-size: 25.27px;
          line-height: 30.24px;
        }

        h4 {
          margin-top: 0.8em;
          font-size: 6.32px;
          line-height: 7.56px;
          letter-spacing: 2px;
        }

        .timer_container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 80%;
          margin: 1.5em auto 2em;

          h3 {
            font-size: 25px;
            color: black;
          }

          .timer {
            padding: 6.32px 9.47px;
            gap: 1.58px;
            border: 1.18px solid black;
            border-radius: 6.32px;
            box-shadow: -3px 3px black;
            h2 {
              font-size: 25.27px;
              line-height: 30.24px;
            }
            p {
              font-size: 5.53px;
              line-height: 6.96px;
            }
          }
        }
      }
    }
  }
`;
export default WinnerErrorWrapper;
