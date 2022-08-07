jQuery( document ).ready( function ($) {

    $( ".form-script" ).submit( function () {
        var str = $( this ).serialize();

        $.ajax( {
            type: "POST",
            url: "mail/contact.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    result = '<p>Ваш заказ принят</p>'
                    $( '#modal-check' ).fadeIn()
                    $( ".form-script" ).hide();
                } else {
                    result = msg;
                }


            }
        } );
        return false;
    } );
} );