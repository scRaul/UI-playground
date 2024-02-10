
type direction = 'left'|'right'|'up'|'down';
export function getSlideTransform(dir: direction, isClosed: boolean) {
  var translate = '';
  if (dir === 'left') {
    translate = isClosed ? '-translate-x-full' : 'translate-x-0';
  } else if (dir === 'right') {
    translate = isClosed ? 'translate-x-full' : 'translate-x-0';
  } else if (dir === 'up') {
    translate = isClosed ? '-translate-y-full' : 'translate-y-0';
  } else if (dir === 'down') {
    translate = isClosed ? 'translate-y-full' : 'translate-y-0';
  }
  const opacity = isClosed ? 'opacity-0 invisible' : 'opacity-100 visible';
  const css = `transform ${translate} ${
      opacity} transition-all duration-300 ease-in-out onTransition`;
  return css;
}