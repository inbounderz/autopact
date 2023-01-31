// Header
$('html').click(function(e) {                    
    if(!$(e.target).closest(".mainmenu,.menuicon").length) {
        $('.menuicon,.mainmenu').removeClass('active');
    }
});
$('.menuicon').click(function(e){
    e.preventDefault();
    $('.menuicon,.mainmenu').toggleClass('active');
});
// Header