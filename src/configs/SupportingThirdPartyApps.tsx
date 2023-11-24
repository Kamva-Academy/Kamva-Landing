import { clarity } from 'react-microsoft-clarity';
import TagManager from 'react-gtm-module';

const initGoogleTagManager = () => {
  TagManager.initialize({
    gtmId: process.env.REACT_APP_GTM_ID!
  });
}

const initClarity = () => {
  clarity.init(process.env.REACT_APP_CLARITY_TOKEN!);
}

const initGoftino = () => {
  (function () {
    var i = process.env.REACT_APP_GOFTINO_TOKEN,
      a = window,
      d = document;
    function g() {
      var g = d.createElement('script'),
        s = 'https://www.goftino.com/widget/' + i,
        l = localStorage.getItem('goftino_' + i);
      (g.async = !0),
        (
          g.src = l ?
            s + '?o=' + l :
            s);
      d
        .getElementsByTagName('head')[0]
        .appendChild(g);
    }
    'complete' === d.readyState ?
      g() :
      a.addEventListener('load', g, !1);
  })();
}

export const initSupportingThirdPartyApps = () => {
  if (process.env.NODE_ENV === 'production') {
    initGoftino();
    initGoogleTagManager();
    initClarity();
  }
}

