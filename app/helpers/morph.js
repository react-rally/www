var FRAMES_PER_SECOND = 60;
var MILLIS_PER_SECOND = 1000;
var MILLIS_PER_FRAME = MILLIS_PER_SECOND / FRAMES_PER_SECOND;

var props = ['scrollLeft', 'scrollRight', 'scrollTop', 'scrollBottom'];

function indexOf(arr, val) {
  var index = -1;
  if (typeof arr.indexOf === 'function') {
    index = arr.indexOf(val);
  } else {
    for (var i=0, l=arr.length; i<l; i++) {
      if (arr[i] === val) {
        index = i;
        break;
      }
    }
  }
  return index;
}

function getProp(el, key) {
  return indexOf(props, key) >= 0 ? el[key] : parseInt(el.style[key], 10) || 0;
}

function setProp(el, key, val) {
  return indexOf(props, key) >= 0 ? el[key] = val : (el.style[key] = val + 'px');
}

function done(idx, arr, callback) {
  arr[idx] = true;

  var finish = true;
  var i = arr.length;

  while(i--) {
    if (arr[i] === false) {
      finish = false;
      break;
    }
  }

  if (finish && typeof callback === 'function') {
    callback();
  }
}

function schedule(el, duration, key, val, idx, arr, callback) {
  var last = [];
  var diff = val - getProp(el, key);
  var step = (diff / ((duration / MILLIS_PER_SECOND) * FRAMES_PER_SECOND));

  (function animate() {
    var temp = getProp(el, key) + step;

    if (last.length === 0 || temp !== last[0]) {
      last = [temp];
    } else if (last.length < 2) {
      last.push(temp);
    } else {
      done(idx, arr, callback);
      return;
    }

    setProp(el, key, (step < 0 ? Math.max(temp, val) : Math.min(temp, val)));
    if (getProp(el, key) === val) {
      done(idx, arr, callback);
      } else {
        window.requestAnimationFrame(animate);
      }
  })();
}

function morph(el, duration, styles, callback) {
  var counter = 0, tracker = [];
  for (var key in styles) {
    if (!styles.hasOwnProperty(key)) { continue; }
    if (getProp(el, key) === styles[key]) { continue; }

    var val = styles[key];
    if (styles[key] instanceof Array) {
        setProp(el, key, styles[key][0]);
        val = styles[key][1];
    }

    tracker.push(false);
    schedule(el, duration, key, val, counter++, tracker, callback);
  }
}

// requestAnimationFrame polyfill
// https://gist.github.com/paulirish/1579671
(function() {
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x=0; x<vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
      return setTimeout(callback, MILLIS_PER_FRAME);
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
})();

export default morph;
