const linkFooter = document.querySelectorAll('.mudarCor');

linkFooter.forEach(el => {
    el.addEventListener('mouseover', () =>{
        el.style.color = 'white';
    });

    el.addEventListener('mouseout', () =>{
        el.style.color = '#17352ea0';
    });
});

const linkContact = document.getElementById('contact');


linkContact.addEventListener('mouseover', () =>{
    linkContact.style.color = 'white';
    linkContact.style.backgroundColor = '#0baaee';
    });

linkContact.addEventListener('mouseout', () =>{
    linkContact.style.backgroundColor = 'white';
    linkContact.style.color = '#19536b';
    });

    //Menu Oculto
    const btn = document.getElementById('btnMenu');
    const menu = document.getElementById('menuContainer');

    btn.addEventListener('click', () =>{
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            });
