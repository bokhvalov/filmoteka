export default function controlColor() {
    const paginColor = document.querySelectorAll('.pagination__page');
    const paginEllips = document.querySelectorAll('.pagination__ellipsis');
    const gallerySubtittle = document.querySelectorAll('.subtitle');
    
    try {
        if (localStorage.getItem('section') === 'section-black') {
            document.querySelector('footer').style.backgroundColor = '#751D1D';
            document.querySelector('.footer__text').style.color = '#f7f7f7';
            document.querySelector('.modal-footer-open').style.color = '#f7f7f7';
            document.querySelector('.modal-container').style.backgroundColor = '#a34545';
            // document.querySelector('.empty_text').style.color = '#ffffff';
            paginColor.forEach(p => p.style.color = '#ffffff'),
            paginEllips.forEach(pEl => pEl.style.color = '#ffffff'),
            gallerySubtittle.forEach(g => g.style.color = '#ffffff');
        }
        else {
            document.querySelector('footer').style.backgroundColor = '#f7f7f7';
            document.querySelector('.footer__text').style.color = '#545454';
            document.querySelector('.modal-footer-open').style.color = '#545454';
            document.querySelector('.modal-container').style.backgroundColor = '#ffffff';
            // document.querySelector('.empty_text').style.color = '#000000';
            paginColor.forEach(p => p.style.color = '#000000'),
            paginEllips.forEach(pEl => pEl.style.color = '#000000'),
            gallerySubtittle.forEach(g => g.style.color = '#000000');
        }
    } catch (err) { }
}
