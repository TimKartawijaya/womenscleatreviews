$(document).ready(function () {
    $(".story-content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".story-content").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $(this).next('.story-content').slideToggle(200);
    });

   
});

