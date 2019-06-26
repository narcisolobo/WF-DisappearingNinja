$( document ).ready(function() {
    console.log( "ready!" );
    $( ".hide" ).click(function() {
        $( this ).hide('fast');
    });
    $( "#restore" ).click(function() {
        window.location.reload();
    });
});