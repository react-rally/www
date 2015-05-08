import browser from './browser';

var PREFIX = '';
if (browser.chrome || browser.safari) {
  PREFIX = '-webkit-';
}
if (browser.firefox) {
  PREFIX = '-moz-';
}
if (browser.opera) {
  PREFIX = '-o-';
}
if (browser.ie) {
  PREFIX = '-ms-';
}

function reactSafe(property) {
  var arr = property.split('');
  var str = '';

  var needsUC = false;
  for (var i=0, l=arr.length; i<l; i++) {
    if (arr[i] === '-') {
      needsUC = true;
    } else if (needsUC) {
      needsUC = false;
      str += arr[i].toUpperCase();
    } else {
      str += arr[i];
    }
  }

  return str;
}

export default function cssPrefix(property) {
  return reactSafe(PREFIX + property);
}
