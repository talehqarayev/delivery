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


    // HAMBURGER MENU SCRIPT

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {

        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
      
        });

    });

});


// КАК РАБОТАТЬ С DOM в РЕАЛЬНЫХ ПРОЕКТАХ

/* 
let heading = document.querySelector(".advantage_header");
    heading.addEventListener("mouseover", function(){
    heading.style.color = "red";
    });

    heading.addEventListener("mouseleave", function(){
      heading.style.color = "black";
      });
    
let icon = document.querySelector(".agency_icon");

    icon.addEventListener("mouseover", function() {
      icon.style.background = "black";
      icon.style.borderRadius = "80px";
      icon.style.textAlign = "center";
    });
    icon.addEventListener("mouseleave", function() {
      icon.style.background = "#ff2600";
    });
 */