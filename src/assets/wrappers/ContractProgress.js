import styled from "styled-components";

const Wrapper = styled.section`
  background: #77c5fc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  padding: 0 0 6em;

  .inputWrapper {
    background: #d2ecff;
    border: 3px solid black;
    width: 80%;
    padding: 1em 1.5em;
    display: flex;
    gap: 15px;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: -4px 4px black;

    .header {
      font-size: 26.49px;
      font-weight: 400;
      font-family: "MilkyNice", sans-serif;
      line-height: 31.71px;
      -webkit-text-stroke: 1px black;
      text-shadow: -2px 2px black;
      color: white;
      span {
        color: #65bfff;
      }
      span:nth-child(2) {
        color: #0ee08f;
      }
    }

    .progress-container {
      width: 100%;
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      /* margin-bottom: 20px; */
      border: 2px solid black;
      box-shadow: -3px 3px black;
      .progress-bar {
        height: 57.4px;
        width: ${(props) => props.width}%;
        background-color: #0ee08f;
        border-radius: 10px 0 0 10px;
        transition: width 0.5s;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      font-size: 26.49px;
      font-weight: 400;
      font-family: "MilkyNice", sans-serif;
      line-height: 31.71px;
      -webkit-text-stroke: 1px black;
      text-shadow: -2px 2px black;
      p {
        color: #65bfff;
      }
      p:nth-child(2) {
        color: #0ee08f;
      }
    }
  }

  @media (max-width: 992px) {
    /* display: none; */
    padding: 1.5em 0 3em;
    gap: 0.5em;
  }
`;

export default Wrapper;
