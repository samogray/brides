$(document).ready(function() {


    $('#lang-select').styler();


    $('#date').datepicker({
    });
$('.main-menu').click(function(){
    $('#main-menu').slideToggle();
});

$('.lang').click(function(){
    $('ul.menu-lang').slideToggle();
});

    $('.btn.drop-form').click(function(){
        $('#search-girl').slideToggle();
    });


    $('.main-menu-index').click(function(){
        $('.menu-drop').slideToggle();
    });


    $('#datepicker, #datapicker-mobile').datepicker({

    });


    $('#carousel-girl-popular, .my-popular-ctrl ').hover(
        function(){
        $('.my-popular-ctrl').fadeIn( 1000 );

    },
      function(){
          $( '.my-popular-ctrl' ).fadeOut( 1000 );
      }
    );
    $('#carousel-girl-online, .my-online-ctrl').hover(
        function(){
            $('.my-online-ctrl').fadeIn( 1000 );

        },
        function(){
            $( '.my-online-ctrl' ).fadeOut( 1000 );
        }
    );
    var minMinAge =  $('.min-down-btn'),
        plusMinAge = $('.min-up-btn'),
        znachMin = parseInt($('#min-age').val());

    plusMinAge.click(function(){
        if (znachMin<70){
            znachMin=znachMin+1;
        }
        $('#min-age').val(znachMin);
    });
    minMinAge.click(function(){
        if (znachMin>18){
            znachMin=znachMin-1;
        }
        $('#min-age').val(znachMin);
    });
    var minMaxAge =  $('.max-down-btn'),
        plusMaxAge = $('.max-up-btn'),
        znachMax = parseInt($('#max-age').val());

    plusMaxAge.click(function(){
        if (znachMax<70){
            znachMax=znachMax+1;
        }
        $('#max-age').val(znachMax);
    });
    minMaxAge.click(function(){
        if (znachMax>18){
            znachMax=znachMax-1;
        }
        $('#max-age').val(znachMax);
    });
     $('a.btn.advanced-srch').click(function(){
            $('.invisible-form').slideToggle();
            $(this).toggleClass('my-color');
            $('#icon').toggleClass('glyphicon-triangle-top');
    });

    $('a.btn.dashboard-menu').click(function(){
        $('.drop-dashboard').slideToggle();
    });

    $('.catalog .menu_item a span.fa').click(function(){
        $(this).toggleClass('fa-caret-up');
    });


    $('#myModal').modal('show');


    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });


});