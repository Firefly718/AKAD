(function($) {
    'use strict';

    $('.headroom').headroom({
        offset: 0,
        tolerance: 0,
    });

    function isVisible (el) {
        let top = $(el).offset().top + 100;
        return top < ($(window).scrollTop() + $(window).height());
    }

    function animate() {
        $('.animate').each((index, el) => {
            if (isVisible(el)) {
                $(el).addClass('animated')
                     .addClass($(el).attr('data-animation'))
                     .removeClass('animate');
            }
        })
    }

    animate();

    $(window).on('scroll', () => {
        animate();
    })

})(jQuery);