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

    var stickyMenu = $(".stickyMenu");
    var shortDescSection = $(".iconSection");
    var stickyMenuTrigger = shortDescSection.offset().top - stickyMenu.outerHeight();

    var wasAnimated = false;

    // stickyMenu.css('display', 'none');

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
            if ($('body').outerWidth() > 768) {
                stickyMenu.fadeIn().addClass("visibility");
                stickyMenu.css('display', 'flex');
            } else {
                stickyMenu.css('display', 'none')
            }
        } else {
            stickyMenu.fadeOut(1).removeClass("visibility");
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
        if (currentPicture < (images.length - 1) && (images.last().offset().left - ($('.slider').offset().left + $('.slider').width() - widthImage)) != 0) {
            currentPicture++;
            slider.animate({
                left: "-=" + widthImage
            }, 1000);
        };
    });

    prevButton.click(function() {
        if (currentPicture > 0 && currentPicture < (images.length)) {
            currentPicture--;
            slider.animate({
                left: "+=" + widthImage
            }, 1000);
        };
    });

    //second slider
    var currentClickedElement = 0;

    $(window).on("resize", function() {
        resizeSlider();
    });
    resizeSlider();

    function resizeSlider() {
        var sliderTwo = $('.secondSlider').find('ul');
        var imagesSliderTwo = sliderTwo.find('li');
        var currPicSlideTwo = 0;
        var widthImageSliderTwo = imagesSliderTwo.eq(currPicSlideTwo).width();
        var allSpan = $('.circleNav').find('span');

        sliderTwo.width(widthImageSliderTwo * imagesSliderTwo.length);

        allSpan.off('click').on("click", function() {

            var currIndex = allSpan.index($(this));
            currentClickedElement = currIndex;

            allSpan.removeClass("active");
            $(this).toggleClass("active");

            sliderTwo.animate({
                left: -(currIndex * widthImageSliderTwo)
            }, 1000);

        });
    };

    //Scroll menu

    var menuItem = $('.stickyMenu').find('li').find('a');
    var menuItem2 = $('.menuIcon').find('a');
    var menuItem3 = $('.menu').find('li').find('a');


    menuItem.add(menuItem2).add(menuItem3).click(function(event) {
        event.preventDefault();
        var scrollToEl = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(scrollToEl).offset().top - 70
        }, 1000);
    });



});
