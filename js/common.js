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
});