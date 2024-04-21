import styled from "styled-components";

const Wrapper = styled.section`
  background: #77c5fc;
  padding: 4em 5em 4em 8em;

  h1 {
    font-size: 96px;
    line-height: 114.91px;
    text-transform: uppercase;
    font-family: "MilkyNice", sans-serif;
    color: white;
    text-shadow: -8px 8px black;
  }

  .faq_wrapper {
    width: 1116px;
    /* height: 706px; */
    display: flex;
    gap: 36px;
    flex-direction: column;
    margin-top: 2em;

    
    .faq {
      background: white;
      height: fit-content;
      width: 100%;
      padding: 16px;
      border: 3px solid black;
      border-radius: 56px;
      box-shadow: -7px 7px black;

      img {
        cursor: pointer;
      }

      .answer {
        margin-left: 1em;
        font-weight: 400;
        font-size: 24px;
        font-family: "Sora", sans-serif;
        margin-top: 0.5em;
        line-height: 30.24px;
      }

      .question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 40px;
          font-weight: 400;
          line-height: 47.88px;
          font-family: "MilkyNice", sans-serif;
          margin-left: 1em;
          color: white;
          text-shadow: -4px 4px black;
          -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
          span {
            color: #ffda88;
          }
        }
      }
    }
  }
`;

export default Wrapper;
