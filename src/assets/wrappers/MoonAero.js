import styled from "styled-components";

const Wrapper = styled.section`
  background: #d6e9ff;
  padding-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 64px;
    font-weight: 400;
    line-height: 76.61px;
    font-family: "MilkyNice", sans-serif;
    color: white;
    text-shadow: -6px 6px black;
    -webkit-text-stroke: 2px black;
    span {
      color: #ffda88;
      text-decoration: underline;
      text-decoration-color: #ffda88;
    }
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }

  @media (max-width: 992px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }

    h1{
        font-size: 19.65px;
        line-height: 23.52px;
    text-shadow: -2px 2px black;

    }
  }
`;

export default Wrapper;
