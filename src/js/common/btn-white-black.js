export function btnWhiteBlack() {
  const btnDAndN = document.querySelector('.switch-btn');
  const section = document.querySelector('body');
//   console.log(section);

  if (localStorage.getItem('btn')) {
    btnDAndN.classList.add(localStorage.getItem('btn'));
    section.classList.add(localStorage.getItem('section'));
  }

    btnDAndN.addEventListener('click', () => {
        const paginColor = document.querySelectorAll('.pagination__page');
        const paginEllips = document.querySelectorAll('.pagination__ellipsis');
        const gallerySubtittle = document.querySelectorAll('.subtitle');
        
    if (localStorage.getItem('btn')) {
        localStorage.removeItem('section');
        localStorage.removeItem('btn');
      
        btnDAndN.classList.remove('switch-on');
        section.classList.remove('section-black');
        document.querySelector('footer').style.backgroundColor = '#f7f7f7';
        document.querySelector('.footer__text').style.color = '#545454';
        document.querySelector('.modal-footer-open').style.color = '#545454';
        document.querySelector('.modal-container').style.backgroundColor = '#ffffff';
        return (paginColor.forEach(p => p.style.color = '#000000'),
            paginEllips.forEach(pEl => pEl.style.color = '#000000'),
        gallerySubtittle.forEach(g => g.style.color = '#000000'));
    } else {
        toggleBlackMode();
        document.querySelector('footer').style.backgroundColor = '#751D1D';
        document.querySelector('.footer__text').style.color = '#f7f7f7';
        document.querySelector('.modal-footer-open').style.color = '#f7f7f7';
        document.querySelector('.modal-container').style.backgroundColor = '#a34545';
        return (paginColor.forEach(p => p.style.color = '#ffffff'),
        paginEllips.forEach(pEl => pEl.style.color = '#ffffff'),
        gallerySubtittle.forEach(g => g.style.color = '#ffffff'));
    }
  });
}

const toggleBlackMode = () => {
  const section = document.querySelector('body');

  document.querySelectorAll('.switch-btn').forEach(btn => {
    btn.classList.toggle('switch-on');
    localStorage.setItem('btn', 'switch-on');
  });
  
  
  section.classList.toggle('section-black');
  localStorage.setItem('section', 'section-black');
};