import styled from "styled-components";
import BgImage from "../images/body_pattern.svg";

const Wrapper = styled.section`
  padding: 3em;

  .header-container {
    text-align: right;

    button {
      background: #f7b94f;
      border-radius: 5vw; /* Responsive border radius */
      padding: 2vw 10vw; /* Responsive padding */
      border: 0.4vw solid black; /* Responsive border */
      box-shadow: -0.3vw 0.3vw black; /* Responsive box shadow */
      font-family: "MilkyNice", sans-serif;
      font-size: 3vw; /* Responsive font size */
      line-height: 3.83vw; /* Responsive line height */
      font-weight: 400;
    }
  }

  .buy_form {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #0699f9;
      font-size: 8vw; /* Responsive font size */
      line-height: 6.61vw; /* Responsive line height */
      font-family: "MilkyNice", sans-serif;
      -webkit-text-stroke: 0.1vw black; /* Responsive text stroke */
      text-shadow: -0.4vw 0.4vw black; /* Responsive text shadow */
    }

    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.3em;
      margin-top: 4em;
      height: 50vh; /* Responsive height */

      .form2 {
        width: 50vw; /* Responsive width */
        padding: 12vw 10vw; /* Responsive padding */
        background-color: white;
        border: 0.4vw solid black; /* Responsive border */
        box-shadow: -0.4vw 0.4vw black; /* Responsive box shadow */
        border-radius: 3vw; /* Responsive border radius */
        display: flex;
        flex-direction: column;
        gap: 4.8vw; /* Responsive gap */

        .item {
          display: flex;
          justify-content: space-between;
          width: 70%; /* Responsive width */
          height: 3.5vw; /* Responsive height */
          gap: 1.6vw; /* Responsive gap */
          border-bottom: 0.2vw solid black; /* Responsive border */
          span {
            font-size: 1.6vw; /* Responsive font size */
            font-weight: 400;
            line-height: 1.9vw; /* Responsive line height */
            letter-spacing: 0.3vw; /* Responsive letter spacing */
            color: #747474;
            font-family: "MilkyNice", sans-serif;
            text-transform: uppercase;
          }

          span:nth-child(2) {
            color: black;
          }
        }
      }
      .form {
        padding: 12vw 8vw; /* Responsive padding */
        background-color: white;
        border: 0.4vw solid black; /* Responsive border */
        box-shadow: -0.4vw 0.4vw black; /* Responsive box shadow */
        border-radius: 3vw; /* Responsive border radius */
        display: flex;
        gap: 1.8vw; /* Responsive gap */
        flex-direction: column;

        button {
          background: #ffda88;
          padding: 1.6vw 3.2vw; /* Responsive padding */
          border-radius: 3vw; /* Responsive border radius */
          border: 0.4vw solid black; /* Responsive border */
          font-size: 2vw; /* Responsive font size */
          line-height: 2.43vw; /* Responsive line height */
          letter-spacing: 0.3vw; /* Responsive letter spacing */
          font-family: "MilkyNice", sans-serif;
          font-weight: 400;
          box-shadow: -0.4vw 0.4vw black; /* Responsive box shadow */
        }

        .form-item {
          padding: 1.6vw; /* Responsive padding */
          gap: 2.1vw; /* Responsive gap */
          border: 0.4vw solid black; /* Responsive border */
          border-radius: 3vw; /* Responsive border radius */
          label {
            font-size: 1.6vw; /* Responsive font size */
            line-height: 1.9vw; /* Responsive line height */
            letter-spacing: 0.3vw; /* Responsive letter spacing */
          }

          .input-wrapper {
            height: 3.6vw; /* Responsive height */
            input {
              font-size: 1.6vw; /* Responsive font size */
              letter-spacing: 0.3vw; /* Responsive letter spacing */
              line-height: 1.9vw; /* Responsive line height */
              height: 100%;
              width: 70%;
            }

            .input-txt {
              padding: 1.6vw; /* Responsive padding */
              border: 0.4vw solid black; /* Responsive border */
              border-radius: 1.3vw; /* Responsive border radius */
              font-size: 1.6vw; /* Responsive font size */
              line-height: 1.9vw; /* Responsive line height */
              letter-spacing: 0.3vw; /* Responsive letter spacing */
            }
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 1em;
    .header-container {
      button {
        padding: 0.35em 1.752em; /* Responsive padding */
        border: 0.131em solid black; /* Responsive border */
        border-radius: 1.796em; /* Responsive border radius */
        font-size: 1.2em; /* Responsive font size */
        line-height: 1.436em; /* Responsive line height */
        box-shadow: -0.1em 0.1em black; /* Responsive box shadow */
      }
    }

    .buy_form {
      h1 {
        font-size: 2.4em; /* Responsive font size */
        text-shadow: -0.096em 0.096em black; /* Responsive text shadow */
      }

      .form-container {
        flex-direction: column;
        gap: 1.3em;
        margin-top: 6em;
        margin-bottom: 3em;

        .form2 {
          width: 34.729vw; /* Responsive width */
          padding: 2.4em; /* Responsive padding */
          border: 0.201vw solid black; /* Responsive border */
          box-shadow: -0.2vw 0.2vw black; /* Responsive box shadow */
          border-radius: 1.607em; /* Responsive border radius */
          gap: 2.4vw; /* Responsive gap */

          .item {
            width: 100%; /* Responsive width */
            height: 3.5vw; /* Responsive height */
            gap: 1.6vw; /* Responsive gap */
            border-bottom: 0.2vw solid black; /* Responsive border */
            span {
              font-size: 1.071vw; /* Responsive font size */
              line-height: 1.282vw; /* Responsive line height */
              letter-spacing: 0.15vw; /* Responsive letter spacing */
            }
          }
        }
        .form {
          padding: 2.4em 1.6em; /* Responsive padding */
          border: 0.201vw solid black; /* Responsive border */
          box-shadow: -0.2vw 0.2vw black; /* Responsive box shadow */
          border-radius: 1.607em; /* Responsive border radius */

          button {
            padding: 1.071vw 2.143vw; /* Responsive padding */
            border-radius: 1.607em; /* Responsive border radius */
            border: 0.201vw solid black; /* Responsive border */
            font-size: 1.607vw; /* Responsive font size */
            line-height: 1.925vw; /* Responsive line height */
            letter-spacing: 0.15vw; /* Responsive letter spacing */
          }

          .form-item {
            padding: 1.6em; /* Responsive padding */
            gap: 2.143vw; /* Responsive gap */
            border: 0.201vw solid black; /* Responsive border */
            border-radius: 1.607em; /* Responsive border radius */
            label {
              font-size: 1.071vw; /* Responsive font size */
              line-height: 1.282vw; /* Responsive line height */
              letter-spacing: 0.15vw; /* Responsive letter spacing */
            }

            .input-wrapper {
              height: 3.443vw; /* Responsive height */
              input {
                font-size: 1.071vw; /* Responsive font size */
                letter-spacing: 0.15vw; /* Responsive letter spacing */
                line-height: 1.282vw; /* Responsive line height */
                height: 100%;
                width: 70%;
              }

              .input-txt {
                padding: 1.071vw; /* Responsive padding */
                border: 0.201vw solid black; /* Responsive border */
                border-radius: 0.536vw; /* Responsive border radius */
                font-size: 1.071vw; /* Responsive font size */
                line-height: 1.282vw; /* Responsive line height */
                letter-spacing: 0.15vw; /* Responsive letter spacing */
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
