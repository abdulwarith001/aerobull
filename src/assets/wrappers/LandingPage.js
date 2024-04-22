import styled from 'styled-components'

const Wrapper = styled.section`
  .milkyguy {
    margin: -20em 3em 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mobile{
      display: none;
    }

    .desktop{
      display: block;
    }
    h1 {
      color: white;
      -webkit-text-stroke: 1px #dbf0ff; /* For WebKit browsers like Chrome and Safari */
      font-size: 237.39px;
      line-height: 1;
      font-weight: 400;
      font-family: "MilkyNice", sans-serif;
    }
  }

  @media (max-width: 992px) {

    .milkyguy{
      margin: -12em 0 0;

      .mobile{
        display: block;
      }

      .desktop{
        display: none;
      }
      h1{
        display: none;

      }
    }
  }
`;

export default Wrapper