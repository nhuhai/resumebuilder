$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $( "div.add-buttons" )
        .mouseenter(function() {
            $( this ).fadeTo("fast", 1);
        })
        .mouseleave(function() {
            $( this ).fadeTo("fast", 0.001);
        });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    $('#add-section-title').click(function() {

        var $newdiv = $("<div class='wider-width'/>");
        $( "#custom-body" ).append($newdiv);
        
        var $input = "<input class='section-title-text' type='text' placeholder='Section Title'>";
        var $remove_button = "<a href='#' class='remove-button'>-</a>";
        var $horizontal_line = "<hr>";

        $newdiv.append($input + $remove_button + $horizontal_line);

        $('.remove-button').on('click', function() {
            $(this).parent().remove();
        });
    });

    $('#add-subsection').click(function() {

        var $newdiv = $("<div class='wider-width'/>");
        $( "#custom-body" ).append($newdiv);
        
        var $text = "<input class='subsection-text' type='text' placeholder='Subsection Title'>";
        var $date = "<input class='date' type='text' placeholder='Date'>";
        var $remove_button = "<a href='#' class='remove-button'>-</a>";

        $newdiv.append($text + $date + $remove_button);

        $('.remove-button').on('click', function() {
            $(this).parent().remove();
        });
    });

    $('#add-bullet-point').click(function() {

        var $newdiv = $("<div class='wider-width'/>");
        $( "#custom-body" ).append($newdiv);
        
        var $bullet_symbol = "<span class='bullet-symbol'>&#x2022;</span>";
        var $text = "<input class='bullet-text' type='text' placeholder='Bullet Point'>";
        var $remove_button = "<a href='#' class='remove-button'>-</a>";

        $newdiv.append($bullet_symbol + $text + $remove_button);

        $('.remove-button').on('click', function() {
            $(this).parent().remove();
        });
    });

    $('#add-line').click(function() {

        var $newdiv = $("<div class='wider-width'/>");
        $( "#custom-body" ).append($newdiv);

        var $input = "<input class='line-text' type='text' placeholder='Detail'>";
        var $remove_button = "<a href='#' class='remove-button'>-</a>";

        $newdiv.append($input + $remove_button);

        $('.remove-button').on('click', function() {
            $(this).parent().remove();
        });
    });

    $('#move-down').click(function () {
        $('#container').css({marginTop: '+=5px'});
    }); 

    $('#move-up').click(function () {
        $('#container').css({marginTop: '-=5px'});
    }); 
       
});