import styled from "styled-components";
import BgImage from "../images/presale_modal_bg.png";
import disclaimer from "../images/disclaimer.png";

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
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 80vh;
      padding: 20px;

      .frontImg {
        background: url(${disclaimer});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        border: 2px solid black;
        box-shadow: -4px 4px black;
        border-radius: 25px;
        text-transform: uppercase;
        font-size: 60px;
        margin: 0.5em auto;
        padding: 0.4em 0;
        color: #fe6464;
        text-shadow: -5px 5px black;
        font-family: "MilkyNice", sans-serif;
        -webkit-text-stroke: 1px black;
      }

      h4 {
        font-family: "MilkyNice", sans-serif;
        font-size: 1.1em;
        line-height: 24px;
        margin-bottom: 1.5em;
      }

      .items {
        margin-left: 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-bottom: 3em;
        li {
          font-family: "MilkyNice", sans-serif;
          font-size: 1.1em;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.5);
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
        h1 {
          text-shadow: -2px 2px black;
          font-size: 40.27px;
          line-height: 45.24px;
        }
        .frontImg {
          width: 90%;
          font-size: 31.97px;
          border-radius: 15px;
          margin: 0em auto 1em;
        }
        h4 {
          font-size: 14px;
          line-height: 16.67px;
        }
        .items {
          margin-left: 1em;
          margin-top: 1em;
          li {
            font-size: 14px;
            line-height: 16.67px;
          }
        }
      }
    }
  }
`;
export default WinnerErrorWrapper;
