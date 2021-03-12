$(document).ready(function(){


// Scroll PAGE UP

    $(window).scroll(function() {

        if ($(this).scrollTop() > 1200) {
    
    $(".pageup").fadeIn("slow");
      
    } 
        else {

        $(".pageup").fadeOut();
          }
    });

    // Чтобы скролл крутилась до самого вверха сайта ПЛАВНО, а не прямой переход

    $("a[href^='#']").click(function(){

      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    // MODAL WINDOW

    $("[data-modal=recall]").on("click", function() {

      $(".overlay, #recall").fadeIn("fast");
      });
  
      $(".modal_close").on("click", function() {
  
      $(".overlay, #recall").fadeOut("fast");
      });

});