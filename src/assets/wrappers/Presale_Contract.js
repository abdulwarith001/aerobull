import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  padding: 3em 0 0;

  h1 {
    font-size: 58.01px;
    font-weight: 400;
    line-height: 69.44px;
    text-shadow: 4px 4px black;
    font-family: "MilkyNice", sans-serif;
    color: white;
    text-transform: uppercase;
  }

  .inputWrapper {
    background: white;
    border: 3px solid black;
    height: 72px;
    width: 868px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 56px;
    gap: 24px;
    margin-top: 1em;
    box-shadow: -4px 4px black;

    padding: 16px;
    input {
      background: transparent;
      border: none;
      outline: none;
      font-family: "Sora", sans-serif;
      font-size: 32px;
      line-height: 40.32px;
      font-weight: 600;
      width: 625px;
      height: 40px;
    }

    button {
      width: 195px;
      height: 72px;
      background: #222222;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      border-radius: 56px;
      gap: 10px;
      font-size: 32px;
      font-weight: 400;
      line-height: 40.32px;
      outline: none;
      transition: box-shadow 500ms ease-out;
      border: none;
    }

    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }

    button:hover {
      box-shadow: -8px 8px black;
    }
  }

  @media (max-width: 992px) {
    /* display: none; */
    padding: 4em 0 3em 0;
    gap: 0.5em;
    h1 {
      font-size: 27.86px;
      text-shadow: 2px 2px black;
      line-height: 33.37px;
    }

    .inputWrapper {
      background: white;
      border: 0.92px solid black;
      height: fit-content;
      border-radius: 17.25px;
      gap: 7.39px;
      margin-top: 0.5em;
      box-shadow: -2px 2px black;
      width: 90%;
      padding: 4.93px;

      input {
        font-size: 18px;
        line-height: 22.41px;
        /* width: 193px; */
      }

      .mobile {
        display: block;
      }
      .desktop {
        display: none;
      }

      button {
        width: 60.32px;
        height: 21.85px;
        background: #222222;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 32px;
        border-radius: 17.25px;
        gap: 3.02px;
        font-size: 14.85px;
        line-height: 12.41px;
      }
    }
  }
`;

export default Wrapper;
