const menuBtn = document.querySelector('.menubtn');
const close = document.getElementById('close');
const closeBtn = document.getElementById('closebtn');
const navItem = document.querySelector('navitem');

// intitial state of menu button

let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        document.getElementById('navbar').style.width = '45%';



        // Set Menu Button State 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        document.getElementById('navbar').style.width = '0';

        // Set Menu Button State 
        showMenu = false;
    }
}

/*
function openSlideMenu() {
    document.getElementById('navbar').style.width = '350px';
    document.getElementById('navbar').style.height = '350px';
    document.getElementById('close').style.position = 'absolute';
    document.getElementById('close').style.right = '50px';
    document.getElementById('close').style.left = '50px';
}



function closeSlideMenu() {
    document.getElementById('navbar').style.width = '0';
    document.getElementById('navbar').style.height = '0';
}
*/

