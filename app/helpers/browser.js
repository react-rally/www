var PATTERNS = {
  firefox: /firefox/i,
  chrome: /chrome\/(.*) safari\//i,
  safari: /version\/(.*) safari\//i,
  opera: /opera/i,
  ie: /(msie|trident)/i
};

var browser = {};

Object.keys(PATTERNS).forEach((agent) => {
  browser[agent] = PATTERNS[agent].test(navigator.userAgent);
});

export default browser;
