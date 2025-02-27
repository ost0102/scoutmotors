
const visual1 = gsap.timeline({
    scrollTrigger: {
        trigger: "section.main .main__visual",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
})
visual1.to('.main__visual .dimmed', { opacity: 1 });

const visualPop = gsap.timeline({
    scrollTrigger: {
        trigger: "section.main .main__visual",
        start: "100% 80%",
        end: "bottom top",
        onEnter:function(){
            $('section.sequences .sequences__cont .reserve__box').addClass('show')
        },
        onLeaveBack:function(){
            $('section.sequences .sequences__cont .reserve__box').removeClass('show')
        },
        // toggleActions:"play none none reverse"
    }
})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.main .main__visual",
        start: "top 75%",        
        end: "bottom 75%",       
        scrub: true,
        toggleActions: "play none none reverse",
        toggleClass: { targets: ".sequences", className: "remove" },
    }
});


const $container = $('.sequences__box');

for (let i = 1; i <= 384; i++) {
    const formattedNumber = String(i).padStart(3, '0');
    $container.append(`<img src="/assets/sequences1/${formattedNumber}.webp" alt="Image ${i}">`);
}
const $images = $container.find('img');
$images.eq(0).show();
gsap.timeline({
    scrollTrigger: {
        trigger: "section.sequences",
        start: "0% 0%",
        end: "bottom bottom",
        scrub: 0,
        onUpdate: (self) => {
            const progress = Math.round(self.progress * 383);
            $images.hide();
            $images.eq(progress).show();


            if (progress >= 88 && progress <= 180) {
                $('.sequences__title.first').addClass('active');
            } else {
                $('.sequences__title.first').removeClass('active');
            }


            if (progress >= 208 && progress <= 300) {
                $('.sequences__title.second').addClass('active');
            } else {
                $('.sequences__title.second').removeClass('active');
            }

        
            if ((progress >= 88 && progress <= 180) || (progress >= 208 && progress <= 300)) {
                $('.sequences__box').addClass('active');
            } else {
                $('.sequences__box').removeClass('active');
            }

            if (self.progress === 1) {
                $images.hide();
                $images.eq(383).show(); 
            }

            
            if (progress > 181) {
                if (!$('.sequences').hasClass('remove')) {
                    $('.sequences').addClass('remove');
                }
            } else if (progress <= 180) {
                if ($('.sequences').hasClass('remove')) {
                    $('.sequences').removeClass('remove');
                }
            }

        },
    }
});

iconTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.icon",
        start: "0% 80%",
        end: "0% 20%",
        scrub: .5,
        toggleActions: "play reverse play reverse",
        onLeave: () => {
            $('section.icon').css('border-radius', '0');
        },
        onEnterBack: () => {
            $('section.icon').css('border-radius', '10px');
        },
    }
});
iconTl.fromTo(
    'section.icon', 
    { 
        clipPath: 'inset(1% 7% 0% 7% round 10px 10px 10px 10px)', 
        borderRadius: '10px' 
    }, 
    { 
        clipPath: 'inset(0% 0% 0% 0% round 10px 10px 10px 10px)',
        borderRadius: '0px',
        onComplete: () => {
            gsap.set('section.icon', { clipPath: 'inset(0% 0% 0% 0%)' }); 
        }
    },'a'
);

iconImgTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.icon",
        start: "0% 50%",
        end: "100% 100%",
        scrub: .5,
        toggleActions: "play reverse play reverse",
    }
});
iconImgTl
    .to('.icon__pic',{'--process':1.5});


iconTitleTl = gsap.timeline({
    scrollTrigger:{
        trigger:".icon__title",
        start:"top 50%",
        end:"80% 80%",
        scrub:1,
    }
})

iconTitleTl.to('.in__bottom',{
    'bottom':'0',
})

iconTitleTl.to('.outside',{
    'bottom':'0',
})


const $container2 = $('.pic__list');
for (let i = 1; i <= 55; i++) {
    const formattedNumber2 = String(i).padStart(3, '0');
    $container2.append(`<img src="/assets/sequences2/${formattedNumber2}.webp" alt="Image ${i}">`); // 템플릿 리터럴로 수정
}
const $images2 = $container2.find('img');
$images2.eq(0).show();

const innerImgTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner__pic",
        start: "top top",
        end: "100% bottom", 
        scrub: 0,
        toggleActions: "play reverse play reverse",
        onUpdate: (self) => {
            const progress = Math.round(self.progress * 54);
            $images2.hide();
            $images2.eq(progress).show();
        },
    },
});

const picImgTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pic__img",
        start: "24% 90%",
        end: "60% 80%",
        scrub: 0,
        toggleActions: "play reverse play reverse",
    }
});

picImgTl.fromTo(
    '.pic__img', 
    { 
        clipPath: 'inset(24% 7% 0% 7% round 10px 10px 10px 10px)', 
        borderRadius: '10px' 
    }, 
    { 
        clipPath: 'inset(0% 0% 0% 0% round 10px 10px 10px 10px)', 
        borderRadius: '0px',
        onComplete: () => {
            gsap.set('.pic__img', { clipPath: 'inset(0% 0% 0% 0%)' }); 
        }
    }
);



const campTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.camp",
        start: "0% 60%",
        end: "100% 100%",
        scrub: .1,
        toggleActions: "play reverse play reverse",
    }
});
campTl
    .to('.camp__title span',{
        'bottom':'0',
        'clip-path':'inset(0% 0% 0% 0%)'
    })

const campOverlayTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".camp__overlay",
        start: "bottom 60%",
        end: "200% 100%",
        scrub: .1,
        toggleActions: "play reverse play reverse",
    }
});
campOverlayTl
.to('.camp__overlay',{'--progress':1})

const campTitleTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.camp",
        start: "0% 40%",
        end: "70% 70%",
        scrub: .1,
        toggleActions: "play reverse play reverse",
    }
});
campTitleTl
.to(".camp__title", { "--progress": 1 })

const campImg1Tl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.camp",
        start: "0% 40%",
        end: "50% 70%",
        scrub: .1,
        toggleActions: "play reverse play reverse",
    }
});
campImg1Tl
    .to("img.camp__img1", {"top":"-180px"})

const campImg2Tl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.camp",
        start: "40% 60%",
        end: "70% 70%",
        scrub: .1,
        toggleActions: "play reverse play reverse",
    }
});
campImg2Tl
    .to("img.camp__img2", {"bottom":"33%"})

const campdescriptionTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.camp",
        start: "40% 70%",
        end: "70% 100%",
        scrub: .1,
        toggleActions: "play reverse play reverse",
    }
});
campdescriptionTl
    .to(".camp__description",{"opacity":".7"})
    .to("img.camp__img3",{"transform":"rotate(0deg)"})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        
        998: {
            slidesPerView: 5.5,
        },
        640:{
            slidesPerView: 4.5
        },
        480:{
            slidesPerView: 3.5
        }
    },
});


const footerTl = gsap.timeline({
    scrollTrigger: {
        trigger: "footer",
        start: "0% 100%",
        end: "100% 100%",
        scrub: 0,
        toggleActions: "play reverse play reverse",
    }
});
footerTl
    .to('.footer__bg',{'background-position-y':'-70px'})


gsap.to('.footer__poster span',{
    xPercent: -100,       
    duration: 12,          
    ease: "none",          
    repeat: -1,   
})

