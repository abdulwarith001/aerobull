import styled from  'styled-components'

const Wrapper = styled.section`
  padding: 3em 0 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ddf1ff;

  h1 {
    color: #0699f9;
    font-weight: 400;
    line-height: 114.91px;
    font-size: 96px;
    text-shadow: 5px 5px black;
    text-transform: uppercase;
    font-family: "MilkyNice", sans-serif;
  }

  .maps {
    margin-top: 12em;
    width: 1145px;

    .mapArr {
      display: flex;
      align-items: flex-end;
      position: relative;

      .img {
        margin-top: 4em;
        position: absolute;
        top: 120px;
        left: 705px;
      }
    }
    .mapArr3 {
      display: flex;
      align-items: flex-end;
      position: relative;
      margin-top: 7em;

      .img3 {
        margin-top: 4em;
        position: absolute;
        top: 100px;
        left: 705px;
      }
    }
    .mapArr2 {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: relative;
      margin-top: 4em;

      .img2 {
        margin-top: 6em;
        position: absolute;
        top: 15px;
        left: 200.5px;
      }
    }
    .map-head {
      display: flex;
      position: relative;
      h4 {
        font-size: 40px;
        font-weight: 400;
        line-height: 47.88px;
        color: #0699f9;
        font-family: "MilkyNice", sans-serif;
        text-shadow: 4px 4px black;
      }

      .lastText{
        color: #F7B94F;
      }

      img {
        margin-top: -10em;
        position: absolute;
        top: 20px;
        left: 570px;
      }
    }
    .map {
      width: 628px;
      height: 232px;
      background-color: white;
      border-radius: 24px;
      padding: 32px;
      border: 4px solid black;
      box-shadow: -6px 6px black;
    }
  }

  .content {
    margin-top: 2em;
    height: 88px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    div {
      display: flex;
      gap: 10px;
    }

    .extra_content {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      margin-top: 1em;
      gap: 1px;
      /* background: red; */
      .span {
        color: #0052ff;
        font-size: 16px;
        line-height: 20.16px;
        text-transform: uppercase;
      }
    }
    i {
      color: #0347b2;
      font-size: 20px;
      font-weight: 400;
      line-height: 23.94px;
      text-shadow: 2px 2px black;
      font-style: none;
      font-family: "MilkyNice", sans-serif;
    }

    span {
      font-size: 16px;
      font-weight: 600px;
      line-height: 20.16px;
      font-family: "Sora", sans-serif;
    }
  }
`;

export default Wrapper