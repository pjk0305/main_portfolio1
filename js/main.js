$(document).ready(function() {
    // 스크롤 애니메이션
    const $counters = $(".title_ment, .artist_img");
    
    const exposurePercentage = 100;
    const loop = true;
    $(window).on('scroll', function() {
        $counters.each(function() {
            const $el = $(this);
    

            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            

            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }

            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();


    // lp 회전
    const rotatingImage = document.querySelector('.album_lp');
    let angle = 0;

    function rotate() {
        angle += 1; 
        rotatingImage.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate); 
    }

    rotate(); 

    // info_img
    const refresh = document.getElementById('refresh');
    const refresh_btn = document.getElementById('refresh_btn');
    const images = [
        './img/refresh1.png', 
        './img/refresh2.png', 
        './img/refresh3.png'  
    ];
    let currentIndex = 0;

        refresh_btn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; 
        refresh.style.backgroundImage = `url('${images[currentIndex]}')`; 
    });

    // dj
    let roller = document.querySelector('.rolling-list');
    roller.id = 'roller1'; 

    let clone = roller.cloneNode(true)
    
    clone.id = 'roller2';
    document.querySelector('.dj_wrap').appendChild(clone);

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');


});

