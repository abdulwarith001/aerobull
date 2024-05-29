import styled from "styled-components";
import BgImage from "../images/presale_modal_bg.png";

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
    /* background-image: url(${BgImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover; */
    background-color: white;
    border: 2px solid black;
    border-radius: 24px;
    width: 812px;
    box-shadow: -6px 6px black;
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
        color: #fe6464;
        text-shadow: -6px 6px black;
        -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
        font-size: 64px;
        line-height: 76.61px;
        font-weight: 400;
        font-family: "MilkyNice", sans-serif;
        -webkit-text-stroke: 3px black;
        text-shadow: -3px 3px black;
        text-transform: uppercase;
      }

      h4 {
        font-size: 22.49px;
        font-weight: 400;
        line-height: 28.33px;
        font-family: "MilkyNice", sans-serif;
        width: 80%;
        margin: 2em auto 0;
        /* letter-spacing: 5px; */
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
        box-shadow: -3px 3px black;
        border: 1px solid black;
        margin: 2em 0;
      }
      button:hover {
        box-shadow: -4px -4px black;
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
          background: #0699f9;
          color: white;
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
          font-size: 40.27px;
          line-height: 45.24px;
        }

        h4 {
          margin-top: 0.2em;
          font-size: 22px;
          line-height: 15px;
          letter-spacing: 2px;
        }

        button {
          padding: 8px 40px 12px;
          font-size: 14.02px;
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
              font-size: 7.3px;
              line-height: 10.96px;
            }
          }
        }
      }
    }
  }
`;
export default WinnerErrorWrapper;
