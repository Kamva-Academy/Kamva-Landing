import MuiTheme from './themes/MuiTheme';
import RTLMuiTheme from './themes/RTLMuiTheme';

const selectTheme = (direction: 'rtl' | 'ltr') => {
  if (direction === 'rtl') {
    return RTLMuiTheme;
  } else {
    return MuiTheme;
  }
};

export default selectTheme;
