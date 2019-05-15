$(document).ready(function () {

    let showModal = () => {
        $('.overlay').fadeIn('slow');
        $('.modal').animate({opacity: 1, height:'show'}, 1000);
        },
        closeModal = () => {
            $('.overlay').fadeOut('slow');
            $('.modal').animate({opacity: 0, height:'hide'}, 1000);
        };

    $('a[href="#sheldure"]').on('click', showModal);
    $('.main_btna').on('click', showModal);
    $('.main_btn').on('click', showModal);
    $('.close').on('click', closeModal);

    $('.form').submit(function() { $.post('server.php', $('.form').serialize()); return false;});
});