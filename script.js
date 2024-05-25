$(document).ready(function() {
    var offset = 50;
    var duration = 550;

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
    });

    $('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    // Additional scroll-related functionality can be added here
});
