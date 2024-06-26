import styled from 'styled-components'

const Wrapper = styled.section`
  .desktop {
    background: #015087;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 24px 0;
    border-bottom: 4px solid black;
    width: 100%;
    span {
      font-weight: 400;
      font-size: 32px;
      line-height: 38.2px;
      color: #ddf1ff;
      text-shadow: 3px 3px black;
      font-family: "MilkyNice", sans-serif;
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 992px) {
    /* display: none; */

    .desktop {
      display: none;
    }

    .mobile {
      background: #015087;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 14px 0;
      border-bottom: 1.23px solid black;
      width: 100%;
      span {
        font-weight: 400;
        font-size: 20px;
        line-height: 11.79px;
        color: #ddf1ff;
        text-shadow: 3px 3px black;
        font-family: "MilkyNice", sans-serif;
      }
    }
  }
`;

export default Wrapper