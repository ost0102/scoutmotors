$(document).ready(function() {
    var vHTML = ""; 
    for (var i = 1; i <= 12; i++) {
        vHTML += 
            `<div class="pic__tile">
                <div class="tile__list">
                    <div class="tile__title">
                        <span>${i.toString().padStart(2, '0')}</span>
                    </div>
                    <div class="tile__img">
                        <img src="./assets/images/icon${i}.webp" alt="Icon ${i}">
                    </div>
                </div>
            </div>`;
    }
    $(".icon__pic").append(vHTML);

    setTimeout(() => {
        document.querySelector('.footer__title').classList.add('visible');
    }, 2500); // 3000ms = 3초
});

// $('.header__menu').on('click',function(){
//     $('.menu__popup').slideDown();
//     $('html, body').addClass('noscroll');
//     $('.dimmed').addClass('pop');
// })
// $('.menu__popup .close').on('click',function(){
//     $('.menu__popup').slideUp();
//     $('html, body').removeClass('noscroll');
//     $('.dimmed').removeClass('pop')
// })

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

