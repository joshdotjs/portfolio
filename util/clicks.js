// ==============================================

const disableClick = () => {
  document.querySelector('body').style.pointerEvents = 'none'; // disable even hover events -- WAIT, THIS DOESN'T CAPTURE EVENTS => only applies directly to body, yes?
  document.addEventListener('click', disableClickCallback, true);
}

// ==============================================

const enableClick = () => {
  document.querySelector('body').style.pointerEvents = 'auto';
  document.removeEventListener('click', disableClickCallback, true);
}

// ==============================================

export { 
  disableClick, enableClick,
 };