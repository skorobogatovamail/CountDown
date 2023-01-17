"use strict"

window.onload = function() {
    const parallax = document.querySelector('.parallax');

    if (parallax) {

        const base = document.querySelector('.images-parallax__base');
        const middle = document.querySelector('.images-parallax__middle');
        const front = document.querySelector('.images-parallax__front');

        const forBase = 23;
        const forMiddle = 15;
        const forFront = 5;

        parallax.addEventListener('mousemove', function (e) {
            // размеры экрана
            const parallaxWidth  = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;
 
            // какой процент от экранного расстояния преодолел курсор
            let coordXprc = e.pageX / parallaxWidth * 100;
            let coordYprc = e.pageY / parallaxHeight * 100;

            base.style.cssText =
             `transform: translate(${coordXprc/forBase}%, ${coordYprc/forBase}%);`;
            middle.style.cssText =
             `transform: translate(${coordXprc/forMiddle}%, ${coordYprc/forMiddle}%);`;
            front.style.cssText =
             `transform: translate(${coordXprc/forFront}%, ${coordYprc/forFront}%);`;

        });

    }
}