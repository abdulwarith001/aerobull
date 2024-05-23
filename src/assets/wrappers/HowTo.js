import styled from 'styled-components'
import howTo_bg from "../images/howTo_bg.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  .main-container {
    background: url(${howTo_bg}), white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    padding: 2em 12em;
    width: 560px;
    border: 5px solid black;
    box-shadow: -3px 3px black;
    border-radius: 25px;

    h2 {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 32px;
      font-family: "MilkyNice", sans-serif;
      line-height: 40px;
    }
    div {
      display: flex;
      margin-left: 1em;
      margin-top: 0.5em;
      gap: 10px;
      font-size: 20.81px;
      font-family: "MilkyNice", sans-serif;
      letter-spacing: 0.02em;
      font-weight: 400;
      line-height: 35px;
      span {
        color: #1397fc;
      }
    }

    img {
      margin-left: 4em;
      margin-top: 1em;
    }
  }

  @media (max-width: 992px) {
    margin-top: 2em;

    .main-container {
      width: 80%;
      padding: 2em 2em;

      h2 {
        font-size: 27.86px;
        text-shadow: 1px 1px black;
        line-height: 33.37px;
      }

      div{
        font-size: 1em;
        margin-left: 0;
        line-height: 23px;
        .link{
            margin-left: -2em;
        }
    }
    img{
        width: 100%;
        margin-left: 0;
    }
    }
  }
`;

 export default Wrapper