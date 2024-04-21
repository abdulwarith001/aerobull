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
`;

export default Wrapper