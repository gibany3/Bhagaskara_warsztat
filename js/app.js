$(document).ready(function() {

    //hamburger menu
    var hamburgerElement = $('nav').find('a');
    var ulList = $('.menu').find('ul');
    var mainText = $('.bg').find('section');

    hamburgerElement.click(function(e) {
        e.stopPropagation();
        ulList.toggleClass('hide');
        mainText.toggleClass('hide');
    });
    $('body').click(function() {
        ulList.addClass('hide');
        mainText.removeClass('hide');
    });


    //progress Bar

    var ourSkills = $('.ourSkills');

    $(window).scroll(function(event) {
        var currPosition = (ourSkills.offset().top) + ourSkills.height() - ($(window).innerHeight() * 1);
        if ($(window).scrollTop() > currPosition) {
            $('.ProgBar').addClass('animate');
            $(window).off('scroll');
            $('.ProgBar').prev('p').find('span:nth-of-type(2)').counterUp({
                delay: 10,
                time: 700
            });
        };
    });





});
