export default function borderRadius(styleObj, topLeft, topRight, bottomRight, bottomLeft) {
  if (arguments.length === 2) {
    styleObj.borderRadius = topLeft;
  } else {
    styleObj.borderTopLeftRadius = topLeft;
    styleObj.borderTopRightRadius = topRight;
    styleObj.borderBottomRightRadius = bottomRight;
    styleObj.borderBottomLeftRadius = bottomLeft;
  }
}
