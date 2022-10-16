import controlColor from "./controlColor";

export default function btnWhiteBlack() {
  const btnDAndN = document.querySelector('.switch-btn');
  const section = document.querySelector('body');
  console.log(section);


  if (localStorage.getItem('btn')) {
    btnDAndN.classList.add(localStorage.getItem('btn'));
    section.classList.add(localStorage.getItem('section'));
  }


    btnDAndN.addEventListener('click', (e) => {
        e.preventDefault();

    if (localStorage.getItem('btn')) {
        localStorage.removeItem('section');
        localStorage.removeItem('btn');
      
        btnDAndN.classList.remove('switch-on');
        section.classList.remove('section-black');
    } else {
        toggleBlackMode();
        }
        controlColor();

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