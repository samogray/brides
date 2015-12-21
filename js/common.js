$(document).ready(function() {
    $('#date').datepicker({
        defaultViewDate:{
            year:"1920",
            month:0,
            day:1
        }
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
   /* $('.btn-dashboard').click(function(){
        $(' ul.nav.navbar-nav.my-custom-lady-catalog.dropdown-menu').slideToggle();
    })*/
});