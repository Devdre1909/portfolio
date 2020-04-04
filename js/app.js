// const newTopPosition = () => {
//     return position.top
// }

// anime({
//     targets: '.designs svg:nth-child(1) ',
//     top: setInterval(position.setTopPosition, 1000),
//     left: setInterval(position.setLeftPosition, 1000),
//     easing: 'easeInOutSine',
//     loop: true
// });

// console.log("Working");

var demoContentEl = document.querySelector('.designs');
var fragment = document.createDocumentFragment();
var easingNames = [
    'easeInQuad',
    'easeInCubic',
    'easeInQuart',
    'easeInQuint',
    'easeInSine',
    'easeInExpo',
    'easeInCirc',
    'easeInBack',
    'easeInBounce',
    'easeInOutQuad',
    'easeInOutCubic',
    'easeInOutQuart',
    'easeInOutQuint',
    'easeInOutSine',
    'easeInOutExpo',
    'easeInOutCirc',
    'easeInOutBack',
    'easeInOutBounce',
    'easeOutQuad',
    'easeOutCubic',
    'easeOutQuart',
    'easeOutQuint',
    'easeOutSine',
    'easeOutExpo',
    'easeOutCirc',
    'easeOutBack',
    'easeOutBounce',
    'easeInQuad',
    'easeInCubic',
    'easeInQuart',
];

let className = [
    'red',
    'blue',
    'green',
    'orange',
    'deepOrange',
    'yellow',
    'orchid',
    'purple',
    'black',
    'darkred'
];

function createEasingDemo(easing) {
    var demoEl = document.createElement('div');
    demoEl.classList.add('stretched', 'square', 'el', 'easing-' + easing, className[Math.floor(Math.random() * 10)]);
    anime({
        targets: demoEl,
        translateX: 550,
        direction: 'alternate',
        loop: true,
        delay: anime.stagger(200),
        endDelay: anime.stagger(300),
        duration: 2000,
        easing: easing
    });
    fragment.appendChild(demoEl);
}

easingNames.forEach(function (easeName) {
    createEasingDemo(easeName);
});

demoContentEl.innerHTML = '';
demoContentEl.appendChild(fragment);

let menuToggler = document.querySelector('.menu-toggle');
let menuTogglerIcon = document.querySelector('.icon__big');
let sidebarMenu = document.querySelector('.sidebar__full');

menuToggler.addEventListener('click', (e) => {
    e.preventDefault();

    if (menuTogglerIcon.classList.contains('open')) {
        menuTogglerIcon.classList.remove('open')
        sidebarMenu.classList.remove('show');
    } else {
        menuTogglerIcon.classList.add('open');
        sidebarMenu.classList.add('show');
    }
});