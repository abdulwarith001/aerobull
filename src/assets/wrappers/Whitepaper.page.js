import styled from 'styled-components'
import whitepaper01 from '../images/whitepaper01.png'

const Wrapper = styled.section`
  background: #ddf1ff;
  /* height: 100vh; */

   h2{
      font-size: 48px;
      color: #D7A672;
      line-height: 57.46px;
      font-weight: 400;
      text-shadow: -2px 2px black;
      font-family: "MilkyNice", sans-serif;
  -webkit-text-stroke: 1px black;
    }

    p{
      font-family: "MilkyNice", sans-serif;
      font-size: 24px;
      color: black;
      font-weight: 400;
      margin: 1.5em 0;
      line-height: 28.73px;
      letter-spacing: 2%;
    }
  
  .header {
    display: flex;
  padding: 3em;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: #ddf1ff;
      font-size: 64px;
      font-family: "MilkyNice", sans-serif;
      font-weight: 400;
      text-shadow: 5px 5px black;
      -webkit-text-stroke: 1px black;
    }

    button {
      padding: 8px 40px 12px 40px;
      background: #f7b94f;
      font-size: 32px;
      font-weight: 400;
      color: black;
      font-family: "MilkyNice", sans-serif;
      border-radius: 41px;
      transition: box-shadow 100ms ease-in;
    }
    button:hover {
      box-shadow: -4px -4px black;
    }
  }

  .frontImg{
 background: url(${whitepaper01});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94%;
  border: 2px solid black;
  box-shadow: -4px 4px black;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 96px;
  margin: 0.5em auto;
  padding: 0.8em 0;
  color: white;
  text-shadow: -5px 5px black;
      font-family: "MilkyNice", sans-serif;
  -webkit-text-stroke: 1px black;
  }

  .content{
    padding: 3em;
    padding-bottom: 0
  }

  .image2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto 2em;
    img{
      width: 100%;
    }
  }

   .content2{
    padding: 4em 3em;
    background: white;
    margin-top: 5em;
  }
   .content3{
    padding: 4em 3em;
    background: #015087;
    margin-top: 5em;
    text-align: center;
    p{
      color: white;
    }
  }

  .fundamentals{
    display: flex;
    justify-content: center;
    padding: 5em;
  }
  .goals{
    display: flex;
    justify-content: center;
    padding: 5em 2em;
    background: white;
    gap: 4em;
       .content4{
        ul{
          margin-left: 3em;
          margin-top: 1.5em;
          li{
             font-family: "MilkyNice", sans-serif;
      font-size: 24px;
      color: black;
      font-weight: 400;
      margin: 0.5em 0;
      line-height: 28.73px;
      letter-spacing: 2%;
          }
        }
  }
    
  }

   @media (max-width: 992px) {

    .header {
  padding: 2em;
      h2 {
        font-size: 20.8px;
      }

      button {
        padding: 8px 40px 12px;
        font-size: 14.02px;
      }
    }

     .frontImg{
  font-size: 31.97px;
  border-radius: 15px;
  margin: 0em auto;
  }

  h2{
    font-size: 24px;
    line-height: 28.73px;
  }

  p{
    font-size: 14px;
    line-height: 16.67px;
  }

   .content, .content2, .content3{
    padding: 1em;
    padding-bottom: 2em;
  }

  .fundamentals{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
  }

    .goals{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
    background: white;
    gap: 2em;
       .content4{
        ul{
          margin-left: 1em;
          margin-top: 1em;
          li{
             font-size: 14px;
    line-height: 16.67px;
          }
        }
  }
    
  }
   
  }
`;

export default Wrapper