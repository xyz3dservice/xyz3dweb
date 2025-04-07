$( document ).ready(function() {

    $('.detailBtn').click(function(){
        if ( $(this).parent().next().is(":visible")){
            $(this).parent().next().slideUp();
            $(this).text("Details");
        }
        else{
            $('.detailBox:visible').prev().find(".detailBtn").text("Details");
            $('.detailBox:visible').slideUp();
            $(this).parent().next().slideDown();
            $(this).text("Hide");
        }
        return false;
    });

});