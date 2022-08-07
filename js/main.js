// Бургер

var mapTop = false;
mapTopf();
$( document ).on( 'resize', function () {
    mapTopf();
} );

// карта
function mapTopf() {
    if ($( window ).width() > 991) {

        $( ".adress__link" ).hover( function () {
            if (!mapTop) {
                $( ".map-top" ).append( '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9653705005c9fd8d80e62773a9c8916a9e791bdb8b7dbb1cba951c3db41450cf&amp;source=constructor" width="560" height="400" frameborder="0"></iframe>' );
                mapTop = true;
            }
        }, function () {
        } );
    } else {
        $( ".burger" ).on( 'click', function () {
            $( this ).toggleClass( 'burger-active' );
            $( ".mobile-menu--hidden" ).toggleClass( "mobile-menu--active" );
            $( '.cta' ).toggleClass( "m-i" );
            if (!mapTop) {
                $( ".map-top" ).append( '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9653705005c9fd8d80e62773a9c8916a9e791bdb8b7dbb1cba951c3db41450cf&amp;source=constructor" width="560" height="400" frameborder="0"></iframe>' );
                mapTop = true;
            }
        } );
    }
}


// блик на кнопке
$( '.btn-anim' ).addClass( 'leaking' );


var cloneBurger = $( '.burger' );
$( '.nav__menu' ).append( '<div class="burger burger--mobile"><span></span></div>' );


jQuery( document ).ready( function ($) {
    topT();
} );


$( ".consult-open" ).on( "click", function (event) {
    event.preventDefault();
    $( '#modal-recal' ).fadeIn();
} );

$( ".popup__close-wrap" ).on( 'click', function (event) {
    event.preventDefault();
    $( this ).parents( ".overlay" ).fadeOut();
} );


$( ".order-link" ).on( "click", function (event) {
    var id = $( this ).attr( 'href' );
    var top = $( id ).offset().top;
    $( 'body,html' ).animate( {scrollTop: top}, 1100 );
} );




