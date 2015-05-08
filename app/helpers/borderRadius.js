import browser from './browser';

export default function borderRadius(styleObj, topLeft, topRight, bottomRight, bottomLeft) {
  if (arguments.length === 2) {
    styleObj.borderRadius = topLeft;
    return;
  }

  if (browser.chrome || browser.safari) {
    styleObj.WebkitBorderTopLeftRadius = topLeft;
    styleObj.WebkitBorderTopRightRadius = topRight;
    styleObj.WebkitBorderBottomRightRadius = bottomRight;
    styleObj.WebkitBorderBottomLeftRadius = bottomLeft;
  } else if (browser.firefox) {
    styleObj.MozBorderRadiusTopleft = topLeft;
    styleObj.MozBorderRadiusTopright = topRight;
    styleObj.MozBorderRadiusBottomright = bottomRight;
    styleObj.MozBorderRadiusBottomleft = bottomLeft;
  } else {
    styleObj.BorderTopLeftRadius = topLeft;
    styleObj.BorderTopRightRadius = topRight;
    styleObj.BorderBottomRightRadius = bottomRight;
    styleObj.BorderBottomLeftRadius = bottomLeft;
  }
}
