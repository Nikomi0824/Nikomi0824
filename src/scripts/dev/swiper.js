const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3,
            spaceBetween: 60,
            slidesPerGroup: 1,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                600: {
                    slidesPerView: 3,
                    spaceBetween: 60
                },
                60: {
                    slidesPerView: 1,
                    spaceBetween: 60
                }
            },
});