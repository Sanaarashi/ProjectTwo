$(document).ready(function () {

    let showModal = () => {
        $('.overlay').fadeIn('slow');
        $('.modal').animate({opacity: 1, height:'show'}, 1000);
        },
        closeModal = () => {
            $('.overlay').fadeOut('slow');
            $('.modal').animate({opacity: 0, height:'hide'}, 1000);
        };

    $('a[href="#sheldure"], .main_btna, .main_btn').on('click', showModal);
    $('.close, .overlay').on('click', closeModal);

    $('.form').submit(function() { 
        $.ajax({
            method: "POST",
            url: 'server.php',
            dataType: 'html', 
            data: $('.form-inline').serialize(),
            success: function() {
                alert('Получилось!');
            },
            error: function() {
                alert("Error");
            }
        });
         return false;});
});