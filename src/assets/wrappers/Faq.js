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

   .mobile{
      display: none;
    }
    .desktop{
      display: block;
    }

  @media (max-width: 992px) {
    /* display: none; */
    padding: 2em 0  4em 0.2em;

    .desktop{
      display: none;
    }
    .mobile{
      display: block;
    }

    h1 {
      font-size: 29.57px;
      line-height: 35.39px;
      text-shadow: -4px 4px black;
    }

    .faq_wrapper {
      width: 330.72px;
      gap: 8.62px;
      margin-top: 1em;

      .faq {
        background: white;
        height: fit-content;
        width: 100%;
        padding: 4.93px;
        border: 3px solid black;
        border-radius: 17.25px;
        box-shadow: -3px 3px black;

        img {
          cursor: pointer;
        }

        .answer {
          margin-left: 2em;
          font-size: 7.39px;
          line-height: 9.31px;
        }

        .question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            font-size: 12.32px;
            line-height: 14.75px;
            margin-left: 2em;
            text-shadow: -0.56px 0.56px black;
            -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
           
          }
        }
      }
    }
  }
`;

export default Wrapper;
