(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-footer-open'),
    overlay: document.querySelector('.modal-footer-overlay'),
    modalFooter: document.querySelector('.modal-footer'),
  };

  refs.openModalBtn.addEventListener('click', openModalFooter);

  function openModalFooter() {
    refs.overlay.classList.add('active');
    refs.modalFooter.classList.add('active');
    document.body.classList.add('modal-is-open');
  }

  refs.overlay.addEventListener('click', function () {
    document.querySelector('.modal-footer.active').classList.remove('active');
    this.classList.remove('active');

    document.body.classList.remove('modal-is-open');
  });
})();

document.body.addEventListener(
  'keydown',
  function (e) {
    const key = e.code;

    if (key === 'Escape') {
      document.querySelector('.modal-footer.active').classList.remove('active');
      document
        .querySelector('.modal-footer-overlay')
        .classList.remove('active');

      document.body.classList.remove('modal-is-open');
    }
  },
  false
);
