$(document).ready(function() {
    $(".slide.current").css('top', '0');
});

//nav
$(document).on('click', 'a.mco-link', function(e) {

    e.preventDefault();

    var tid = '#' + this.id;
    var tclass = '.' + this.id;
    
    //global nav
    if ($(this).hasClass('global')) {

        $('.global').removeClass('active');
        $(this).addClass('active');

        if ($(".slide" + tclass).hasClass('current')) {}
        else {
            $(".current")
                .removeClass('current')
                .addClass('previous')
                .css('z-index', '100');
            $(".slide" + tclass)
                .addClass('current')
                .css('z-index', '500')
                .animate({
                    left: '0vw'
                }, 500, "linear", function() {
                    $('.previous')
                        .css('left', '-100vw')
                        .removeClass('previous');
                });
        }
    }

    //pourers nav
    if ($(this).hasClass('local')) {
        $('.local').removeClass('active');
        $(this).addClass('active');
        $('.region').hide();
        $('#div' + $(this).html()).show();
    }

    return false;

});
