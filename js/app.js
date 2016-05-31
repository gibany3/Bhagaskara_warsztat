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

    var stickyMenu = $(".menuScreen");
    var shortDescSection = $(".iconSection");
    var stickyMenuTrigger = shortDescSection.offset().top - stickyMenu.outerHeight();


    var wasAnimated = false;
    $(window).scroll(function(event) {
        var currPosition = (ourSkills.offset().top) + ourSkills.height() - ($(window).innerHeight() * 1);
        if ($(window).scrollTop() > currPosition && !wasAnimated) {
            $('.ProgBar').addClass('animate');
            $('.ProgBar').prev('p').find('span:nth-of-type(2)').counterUp({
                delay: 10,
                time: 700
            });

            wasAnimated = true;
        };

        //Sticky menu
        if ($(window).scrollTop() > stickyMenuTrigger) {
            stickyMenu.addClass("sticky");
        } else {
            stickyMenu.removeClass("sticky");
        };

    });

    //slider
    var nextButton = $('.nextBtn');
    var prevButton = $('.prevBtn');
    var images = $('.slider').find('li').find('div');
    var slider = $('.slider').find('ul');
    var currentPicture = 0;
    var widthImage = images.eq(currentPicture).width();


    slider.width(widthImage * images.length);

    nextButton.click(function() {
        if (currentPicture < (images.length - 1)) {
            currentPicture++;
            slider.animate({
                left: "-=" + widthImage
            }, 1000);
        };

        // if (currentPicture < (members.length - 1) && (members.last().offset().left - (teamMembersSlider.offset().left + teamMembersSlider.width() - imageWidth)) != 0) {
        //         currentPicture++;
        //         membersList.animate({
        //             left: "-=" + imageWidth
        //         }, 1000);
        //     };


    });

    prevButton.click(function() {
        if (currentPicture > 0 && currentPicture < (images.length)) {
            currentPicture--;
            slider.animate({
                left: "+=" + widthImage
            }, 1000);
        };
    });





});
