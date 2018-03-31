export function clickEffect(e) {
  const element = document.createElement('div');
  element.className = 'ClickEffect';
  element.style.top = `${e.clientY - 8}px`;
  element.style.left = `${e.clientX - 8}px`;
  element.addEventListener('animationend', () => {
    element.parentElement.removeChild(element);
  });

  document.body.appendChild(element);
}
