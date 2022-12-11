(function ($) {
    'use strict';

    $(document).ready(function () {

        let Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variable
            let links = this.el.find('.accordion__btn');
            // Event
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        };

        Accordion.prototype.dropdown = function (e) {
            let $el = e.data.el,
                accordion = $(this),
                accordionNext = accordion.next();

            accordionNext.slideToggle(150);
            accordion.parent().toggleClass('accordion__item_open');

            // collapse other accordions
            if (!e.data.multiple) {
                $el.find('.accordion__content').not(accordionNext).slideUp().parent().removeClass('accordion__item_open');
            }
        };

        let accordion = new Accordion($('.accordion'), false);

        $('body').on('focus', '.clock_block input', function () {
            $('#' + $(this).attr('id') + '_icon').click();
        })

    }); //end ready

}(jQuery));