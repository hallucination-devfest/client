import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --vh: 100%;
   }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
    font-family: "Pretendard";
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }
  body {
    touch-action: manipulation;
    line-height: 1;
    // 가운데 정렬
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 위에가 styled-reset 내용 */

  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
    font-family: sans-serif;
    user-select: none;
  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none; 
    
    &:focus {
      outline: none;
    }
  }
 
  @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 100;
        src: url('@/assets/font/Pretendard-Thin.woff') format('woff');
      }

      @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 300;
        src: url('/assets/font/Pretendard-Light.woff') format('woff');
      }

      @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src: url('/assets/font/Pretendard-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        src: url('/assets/font/Pretendard-Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        src: url('/assets/font/Pretendard-SemiBold.woff') format('woff');
      }

      @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        src: url('/assets/font/Pretendard-Bold.woff') format('woff');
      }

      @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 800;
        src: url('/assets/font/Pretendard-ExtraBold.woff') format('woff');
      }

      @font-face {
        font-family: 'NeoDunggeunmo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
}
`;
