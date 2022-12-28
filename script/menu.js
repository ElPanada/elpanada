var menuList = document.getElementById("menuList");
                menuList.style.maxHeight = "0px";
                function togglemenu(){
        
                    if(menuList.style.maxHeight == "0px")
                    {
                        menuList.style.maxHeight = "200px"
                    }
                    else
                    {
                        menuList.style.maxHeight = "0px"
                    }
                }
$(document).ready(function(){
    $('.default').css("border","3px solid yellow");
    $('#pixbox').attr("src",$(".default").attr('change'))
    $(window).on('load', function() {
menu1();
});
      $('').click(function(){
         event.stopPropagation();
         $('').css('background-image','none')
         $('.mini_boxes').css("border","none");
      })
      $('.mini_boxes').click(function(event){
         event.stopPropagation();
      })
      $(".mini_boxes").click(function(){
          $('#pixbox').attr("src",$(this).attr('change'))
         $(this).css("border","3px solid yellow");
         $(this).siblings().css("border","none");
         });   
   });
   function menu1()
   {
        document.getElementById("description").innerHTML ="Beef + Papaya + Egg + Cheese";
        document.getElementById("title").innerHTML ="Cheesy Beef <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 60.00";
   }
   function menu2()
   {
        document.getElementById("description").innerHTML ="Longganisa + Papaya + Egg + Cheese";
        document.getElementById("title").innerHTML ="Cheesy Longganisa <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
   function menu3()
   {
        document.getElementById("description").innerHTML ="Longganisa + Papaya + Egg";
        document.getElementById("title").innerHTML ="Clasic Longganisa <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
   function menu4()
   {
        document.getElementById("description").innerHTML ="Beef + Papaya + Egg";
        document.getElementById("title").innerHTML ="Classic Beef <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
   function menu5()
   {
        document.getElementById("description").innerHTML ="Beef + Papaya + Double Egg";
        document.getElementById("title").innerHTML ="Double Egg Beef <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
   function menu6()
   {
        document.getElementById("description").innerHTML ="Longganisa + Papaya + Double Egg";
        document.getElementById("title").innerHTML ="Double Egg Longganisa <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
   function menu7()
   {
        document.getElementById("description").innerHTML ="Beef + Egg";
        document.getElementById("title").innerHTML ="All Meat Beef <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
   function menu8()
   {
        document.getElementById("description").innerHTML ="Beef + Papaya + Egg + Chili";
        document.getElementById("title").innerHTML ="Spicy Beef <br> Empanada";
        document.getElementById("price").innerHTML ="PHP 70.00";
   }
