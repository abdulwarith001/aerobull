import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6em 0;
  background: #d2ecff;

  h1 {
    font-size: 58.01px;
    font-weight: 400;
    line-height: 69.44px;
    text-shadow: 4px 4px black;
    font-family: "MilkyNice", sans-serif;
    color: #ffcc00;
    text-transform: uppercase;
    text-stroke: 1px black;
    -webkit-text-stroke: 1px black;
  }

  .team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 60px;
    /* background: red; */
    width: 90%;
    margin-top: 4em;

    .team {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 30.09;
        font-weight: 400;
        font-family: "MilkyNice", sans-serif;
        line-height: 36.02px;
        span{
            font-size: 20.06px;
            line-height: 24.01px;
                }
      }
    }
  }
`;

export default Wrapper