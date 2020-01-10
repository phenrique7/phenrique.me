
$(document).ready(function () {

    $(".navbar-nav li a").on('click', function () {
        $('.navbar-nav li a').removeClass('item-active');
        $(this).addClass('item-active');
    });

    $(window).scroll(function() {
        $('.navbar-nav li a').removeClass('item-active');
        if ($(document).scrollTop() < 742) {
            $('a[href="#about"]').addClass('item-active');
        } else if($(document).scrollTop() < 1415){
            $('a[href="#portfolio"]').addClass('item-active');
        }else{
            $('a[href="#contact"]').addClass('item-active');
        }
    });

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(".button-social").mouseenter(function () {
        $(this).css('background-color', '#ffffff');
        $(this).find('.fa-fw').css('color', '#f4511e');
    });

    $(".button-social").mouseleave(function () {
        $(this).css('background-color', '#2f2f2f');
        $(this).find('.fa-fw').css('color', '#ffffff');
    });
});