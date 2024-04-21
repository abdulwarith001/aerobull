import styled from "styled-components";

const WinnerErrorWrapper = styled.section`
  .show {
    z-index: 999;
    /* backdrop-filter: blur(10px); */
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
  }
  .model-content {
    background-color: white;
    border: 1px solid black;
    border-radius: 24px;
    width: 812px;

    .img_wrapper {
      /* background-color: red; */
      text-align: right;
      margin-top: -0.9em;
      margin-right: -1em;
      img {
        width: 8%;
      }
    }

    .content {
      padding: 88px;
      h1 {
        color: #0699f9;
        text-shadow: -3px 3px black;
        -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
        font-size: 64px;
        line-height: 76.61px;
        font-weight: 400;
        font-family: "MilkyNice", sans-serif;
      }
    }
  }
`;
export default WinnerErrorWrapper;
