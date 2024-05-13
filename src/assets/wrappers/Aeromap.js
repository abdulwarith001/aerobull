import styled from  'styled-components'

const Wrapper = styled.section`
  padding: 3em 0 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #77c5fc;

  h1 {
    color: #0699f9;
    font-weight: 400;
    line-height: 114.91px;
    font-size: 96px;
    text-shadow: 5px 5px black;
    text-transform: uppercase;
    font-family: "MilkyNice", sans-serif;
    -webkit-text-stroke: 1px black;
  }

  .maps {
    margin-top: 4em;
    width: 1145px;

    .mapArr {
      display: flex;
      align-items: flex-end;
      position: relative;

      .img {
        margin-top: 2em;
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
      .img5 {
        margin-top: 15em;
        position: absolute;
        top: 100px;
        left: 705px;
      }
      .img6 {
        margin-top: 3em;
        position: absolute;
        top: 100px;
        left: 718px;
      }
    }
    .mapArr2 {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: relative;
      margin-top: 4em;

      .img2 {
        margin-top: 5em;
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
        -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */
      }

      .lastText {
        color: #f7b94f;
      }

      .desktop_map {
        margin-top: -10em;
        position: absolute;
        top: 20px;
        left: 570px;
      }
    }
    .map {
      width: 628px;
      /* height: 232px; */
      background-color: white;
      border-radius: 24px;
      padding: 32px;
      border: 4px solid black;
      box-shadow: -6px 6px black;
    }
    .custom-map {
      width: 957px;
      /* height: 232px; */
      background-color: white;
      border-radius: 24px;
      padding: 32px;
      border: 4px solid black;
      box-shadow: -6px 6px black;
    }
  }

  .content {
    margin-top: 2em;
    height: fit-content;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding-bottom: 32px;

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
  .project-content {
    margin-top: 4em;
    height: fit-content;
    display: flex;
    gap: 50px;
    flex-direction: column;
    padding-bottom: 32px;

    div {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    p {
      font-size: 16px;
      font-weight: 600px;
      line-height: 25.16px;
      font-family: "Sora", sans-serif;
    }
  }

  .mobile_map {
    display: none;
  }
  .desktop_map {
    display: block;
  }
  .mobile_net {
    display: none;
  }
  .desktop_net {
    display: block;
  }

  .desktop_flag {
    display: block;
  }
  .mobile_flag {
    display: none;
  }

  .head-txt {
    font-size: 96px;
    font-weight: 400;
    line-height: 47.88px;
    color: white;
    font-family: "MilkyNice", sans-serif;
    text-shadow: 4px 4px black;
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    -webkit-text-stroke: 1px black; /* For WebKit browsers like Chrome and Safari */

    .project {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      gap: 0.2em;
      flex-direction: row;
      color: #0038A8;
    }
    .project_n {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      gap: 0.2em;
      flex-direction: row;
      color: white;
    }
    .phillipines {
      color: #ce1126;
    }

    .nigeria {
      color: #008753;
    }
    .el_salvador {
      color: #0699f9;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8em;
      flex-direction: row;
    }
  }

  .extra-map {
    margin-left: 5em;
  }
  .extra-map2 {
    margin-left: 6em;
  }

  @media (max-width: 992px) {
    /* display: none; */

    .img,
    .img2,
    .img3,
    .img5,
    .img6 {
      display: none;
    }
    .extra-map {
      margin-left: 0;
    }
    .extra-map2 {
      margin-left: 0;
    }
    .desktop_flag {
      display: none;
    }
    .mobile_flag {
      display: block;
    }

    h1 {
      line-height: 35.28px;
      font-size: 29.47px;
      text-shadow: 2px 2px black;
    }
    .head-txt {
      font-size: 18.31px;
      line-height: 21.92px;
      text-shadow: 0.92px 0.92px black;
      /* img {
        display: none;
      } */
    }

    .desktop_map {
      display: none;
    }
    .mobile_map {
      display: block;
    }

    .maps {
      margin-top: 4em;
      width: 309px;

      .mapArr {
        align-items: flex-start;
        position: relative;
      }
      .mapArr3 {
        margin-top: 4em;
      }
      .mapArr2 {
        margin-top: 4em;
      }
      .map-head {
        display: flex;
        position: relative;
        h4 {
          font-size: 18.31px;
          line-height: 21.92px;
          text-shadow: 0.92px 0.92px black;
        }

        .mobile_map {
          margin-top: -5em;
          position: absolute;
          top: 20px;
          left: 230.26px;
        }
      }
      .map {
        width: 287.48px;
        height: fit-content;
        /* background-color: red; */
        border-radius: 24px;
        padding: 14.65px;
        border: 4px solid black;
        box-shadow: -3px 3px black;
      }
    }

    .content {
      margin-top: 1.5em;
      /* height: 47.65px; */
      display: flex;
      gap: 5px;
      flex-direction: column;

      div {
        display: flex;
        gap: 5px;
      }

      .extra_content {
        display: flex;
        align-items: center;
        margin-top: 0.2em;
        gap: 1px;
        .span {
          font-size: 7.32px;
          line-height: 9.23px;
        }
      }
      i {
        font-size: 9.16px;
        line-height: 10.96px;
        text-shadow: 1px 1px black;
      }

      span {
        font-size: 7.32px;
        line-height: 9.23px;
      }
    }

    .desktop_net {
      display: none;
    }
    .mobile_net {
      display: block;
    }
  }
`;

export default Wrapper