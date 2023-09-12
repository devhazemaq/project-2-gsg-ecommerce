const lightColors = {
  primaryDark: '#1C1C1C',
  secondaryGray600: '#505050',
  background: '#EFF2F4',
  backgroundPrimary: '#F7FAFC',
  backgroundWhite: '#FFF',
  colorPaperOrangeBrightOrange: '#F38332',
  colorPaperTurquoise: '#55BDC3',
  colorPaperLightBlue: '#E3F0FF',
  colorDarkBlue: '#0D6EFD',
  colorVantaDarkBlue: '#005ADE',
  colorRoyalBlue: '#4267B2',
  colorCrimson: '#FA3434',
  colorCrimsonRed: '#EB001B',
  colorLightPink: '#FFE3E3',
  colorFtGray400: '#A9ACB0',
  colorFtGray500: '#8B96A5',
  colorIcLightSkyBlue: '#D1E7FF',
  colorLightBlue: '#E5F1FF',
  colorBlueNoor:'#0D6EFD',
  colorIcSochGray400: '#BBBCBE',
  colorFtGray600: '#505050',
  colorFtGray800: '#606060',
  colorGray200: '#EFF2F4',
  colorGray300: '#E3E8EE',
  colorGray700: '#DBDBDB',
  colorGray800: '#BDC1C8',
  colorGrayLight: '#EEE',
  colorGreen: '#00B517',
  colorOrange: '#FF9017',
  colorPeach: '#FFF0DF',
  colorLightTurquoise: '#C6F3F1',
  colorGrayForBorder: '#E0E0E0',
};



export const theme = {

  colors: lightColors,

  // fontSizes: {},

  fonts: {
    primary: 'Inter, sans-serif',
  },

  meadia: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#000000',
  },


};