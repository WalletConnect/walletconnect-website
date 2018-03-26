export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '12, 12, 13',
  grey: '169, 169, 188',
  blue: '88, 112, 135',
  lightBlue: '88, 120, 188',
  orange: '246, 133, 27',
  green: '79, 180, 128',
  red: '222, 75, 57',
}

export const fonts = {
  size: {
    tiny: '10px',
    small: '12px',
    medium: '16px',
    large: '18px',
    big: '22px',
    h1: '42px',
    h2: '32px',
    h3: '24px',
    h4: '20px',
    h5: '17px',
    h6: '14px',
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  family: {
    SFProText:
      '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Text", Roboto, Helvetica, Arial, sans-serif',
    SFMono: '"SFMono", "Roboto Mono", Courier New, Courier, monospace',
  },
}

export const shadows = {
  soft: '0 2px 6px 0 rgba(2, 2, 3, 0.04), 0 1px 3px 0 rgba(2, 2, 3, 0.06)',
  medium:
    '0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(50, 50, 93, 0.02), 0 5px 10px 0 rgba(59, 59, 92, 0.08)',
}

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out',
}

export const responsive = {
  short: {
    min: 'min-height: 479px',
    max: 'max-height: 480px',
  },
  xs: {
    min: 'min-width: 479px',
    max: 'max-width: 480px',
  },
  sm: {
    min: 'min-width: 639px',
    max: 'max-width: 640px',
  },
  md: {
    min: 'min-width: 959px',
    max: 'max-width: 960px',
  },
  lg: {
    min: 'min-width: 1023px',
    max: 'max-width: 1024px',
  },
}

export const globalStyles = `
  @font-face {
    font-family: 'SFMono';
    src: url('/fonts/SFMono-Regular.eot');
    src: url('/fonts/SFMono-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFMono-Regular.woff2') format('woff2'),
        url('/fonts/SFMono-Regular.woff') format('woff'),
        url('/fonts/SFMono-Regular.ttf') format('truetype'),
        url('/fonts/SFMono-Regular.svg#SFMono-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SFMono';
    src: url('/fonts/SFMono-Medium.eot');
    src: url('/fonts/SFMono-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFMono-Medium.woff2') format('woff2'),
        url('/fonts/SFMono-Medium.woff') format('woff'),
        url('/fonts/SFMono-Medium.ttf') format('truetype'),
        url('/fonts/SFMono-Medium.svg#SFMono-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SFMono';
    src: url('/fonts/SFMono-Semibold.eot');
    src: url('/fonts/SFMono-Semibold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFMono-Semibold.woff2') format('woff2'),
        url('/fonts/SFMono-Semibold.woff') format('woff'),
        url('/fonts/SFMono-Semibold.ttf') format('truetype'),
        url('/fonts/SFMono-Semibold.svg#SFMono-Semibold') format('svg');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SFMono';
    src: url('/fonts/SFMono-Bold.eot');
    src: url('/fonts/SFMono-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFMono-Bold.woff2') format('woff2'),
        url('/fonts/SFMono-Bold.woff') format('woff'),
        url('/fonts/SFMono-Bold.ttf') format('truetype'),
        url('/fonts/SFMono-Bold.svg#SFMono-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/SFProText-Regular.eot');
    src: url('/fonts/SFProText-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFProText-Regular.woff2') format('woff2'),
        url('/fonts/SFProText-Regular.woff') format('woff'),
        url('/fonts/SFProText-Regular.ttf') format('truetype'),
        url('/fonts/SFProText-Regular.svg#SFProText-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/SFProText-Semibold.eot');
    src: url('/fonts/SFProText-Semibold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFProText-Semibold.woff2') format('woff2'),
        url('/fonts/SFProText-Semibold.woff') format('woff'),
        url('/fonts/SFProText-Semibold.ttf') format('truetype'),
        url('/fonts/SFProText-Semibold.svg#SFProText-Semibold') format('svg');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/SFProText-Medium.eot');
    src: url('/fonts/SFProText-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFProText-Medium.woff2') format('woff2'),
        url('/fonts/SFProText-Medium.woff') format('woff'),
        url('/fonts/SFProText-Medium.ttf') format('truetype'),
        url('/fonts/SFProText-Medium.svg#SFProText-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/SFProText-Bold.eot');
    src: url('/fonts/SFProText-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SFProText-Bold.woff2') format('woff2'),
        url('/fonts/SFProText-Bold.woff') format('woff'),
        url('/fonts/SFProText-Bold.ttf') format('truetype'),
        url('/fonts/SFProText-Bold.svg#SFProText-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  html, body, #root, #router-root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.family.SFProText};
    font-style: normal;
    font-stretch: normal;
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.size.medium};
    color: rgb(${colors.blue});
    overflow-y:auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
  	text-decoration: none;
  	margin: 0;
  	padding: 0;
  }

  h1 {
    font-size: ${fonts.size.h1}
  }
  h2 {
    font-size: ${fonts.size.h2}
  }
  h3 {
    font-size: ${fonts.size.h3}
  }
  h4 {
    font-size: ${fonts.size.h4}
  }
  h5 {
    font-size: ${fonts.size.h5}
  }
  h6 {
    font-size: ${fonts.size.h6}
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  ul, li {
  	list-style: none;
  	margin: 0;
  	padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }

  button {
    border-style: none;
    line-height: 1em;
  }

  input {
    -webkit-appearance: none;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }

  .statusbar-overlay {
    opacity: 0;
  }

  #coinbase_button_iframe {
    width: 244px !important;
    margin-top: 40px !important;
  }

  #coinbase_widget {
    display: inline-block;
    margin-top: 56px !important;
  }
`
