import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #f7b94f;
    text-shadow: 6px 6px black;
    font-size: 96px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 114.91px;
    font-family: "MilkyNice", sans-serif;
  }

  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }

  h2 {
    color: #0699f9;
    font-size: 64px;
    font-weight: 400;
    font-family: "MilkyNice", sans-serif;
    text-shadow: 6px 6px black;
    margin-top: 0.2em;
  }

  .aero_container {
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px;
    gap: 10px;
    border: 3px solid black;
    box-shadow: -5px 5px black;
    border-radius: 32px;
    width: 1112.48px;
    margin-top: 2em;

    .content {
      width: 594.57px;
      height: 363.14px;

      .item_wrapper {
        display: flex;
        flex-direction: column;
        gap: 21.59px;
        margin-top: 3em;

        .item {
          display: flex;
          align-items: center;
          gap: 14.39px;
          span {
            font-family: "MilkyNice", sans-serif;
            font-weight: 400;
            font-size: 28.79px;
            line-height: 34.36px;
          }
        }
      }
    }

    h4 {
      color: #ff8074;
      font-size: 50.38px;
      font-weight: 400;
      line-height: 60.3px;
      font-family: "MilkyNice", sans-serif;
      text-shadow: 4px 4px black;
    }
  }

  @media (max-width: 992px) {
    /* display: none; */
    padding: 2em 0;

    h1 {
      color: #f7b94f;
      text-shadow: 3px 3px black;
      font-size: 29.47px;
      line-height: 35.28px;
    }

    h2 {
      font-size: 19.25px;
      text-shadow: 3px 3px black;
      margin-top: 0.2em;
    }

    .aero_container {
      padding: 24.56px;
      gap: 4px;
      border: 0.92px solid black;
      box-shadow: -1px 1px black;
      border-radius: 9.82px;
      width: 300.32px;
      margin-top: 1em;

      .content {
        width: 293.2px;
        height: 120.98px;

        .item_wrapper {
          gap: 6.63px;
          margin-top: 1em;

          .item {
            gap: 4.42px;
            span {
              font-size: 8.84px;
              line-height: 10.58px;
            }
          }
        }
      }

      h4 {
        font-size: 15.47px;
        line-height: 18.52px;
        text-shadow: 2px 2px black;
      }
    }

    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export default Wrapper