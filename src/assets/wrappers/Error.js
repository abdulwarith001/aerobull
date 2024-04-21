import styled from 'styled-components'

const Wrapper = styled.section`
  background: #0699f9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  height: 100vh;
  width: 100vw;

  p {
    font-size: 1.4em;
    font-family: "MilkyNice", sans-serif;
    color: white;
    -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
    text-shadow: -2px 2px black;
  }
`;

export default Wrapper