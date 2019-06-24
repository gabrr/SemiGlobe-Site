var WidthWindow = $(document).innerWidth();
var midDevicesW = 1024;
var SmallDevicesW = 768;
var toggleBtn = document.getElementById('nav-toggle');
var navWithLinks = document.getElementById('nav-with-links');
var navBar = document.getElementById('nav-bar'); 

// this code it's going to make the toogle button's effect
function toggleAnimation(x) {
    x.classList.toggle('activated');
}

function showUpToggle(){
    var triggleTop = $(document).scrollTop();
    var aboutTop = document.getElementById("solutions").offsetTop;
    
    if (aboutTop < triggleTop+30) {
        $(toggleBtn).css("position", "fixed");
    } else {
        $(toggleBtn).css("position", "absolute");
    }
}
    
//The hidden menu must be must close after click in the links
$(document).ready(function(){
    $("#nav-with-links a").click(function(){
        if (WidthWindow < SmallDevicesW) {
            $("#nav-with-links").toggleClass("nav-slide-left");
            $("#nav-toggle").toggleClass("activated");
        }
    });
})



//this lines of codes it make the action on click make the links appear.

$(document).ready(function(){
   $(toggleBtn).click(function(){
       if (WidthWindow < 768) {
           $(".navbar-links").toggleClass("nav-slide-left");
       }else {
           $(".navbar-links").toggleClass("nav-slide-left-desk");
           $(".navbar-links li").toggle(0);
           $(toggleBtn).css("position", "fixed");
       }
   }); 
});


/****  WHEN HOVER THE LINKS, SHOW THE DROP DOWN MENU ****/
if(WidthWindow > 768) {
    $("#drop-button-product").mouseover(function() {
        $("#drop-button-product .drop-menu ul").css("opacity", 1);
        $("#drop-button-product .drop-menu ul").css("margin", "auto");
        $("#drop-button-product img").css("transform", "rotate(-180deg) translateY(50%)");
    }).mouseout(function() {
        $("#drop-button-product .drop-menu ul").css("opacity", 0);
        $("#drop-button-product .drop-menu ul").css("margin", "-300% auto");
        $("#drop-button-product img").css("transform", "rotate(0deg) translateY(-50%)");
    });
    
    $("#drop-button-solutions").mouseover(function() {
        $("#drop-button-solutions .drop-menu ul").css("opacity", 1);
        $("#drop-button-solutions .drop-menu ul").css("margin", "auto");
        $("#drop-button-solutions img").css("transform", "rotate(-180deg) translateY(50%)");
    }).mouseout(function() {
        $("#drop-button-solutions .drop-menu ul").css("opacity", 0);
        $("#drop-button-solutions .drop-menu ul").css("margin", "-300% auto");
        $("#drop-button-solutions img").css("transform", "rotate(0deg) translateY(-50%)");
    });
}

//the toogle on the right side in desktop version must only appear when the user scrolled to see the solutions.
function DeskToggle() {
    var triggleTop = $(document).scrollTop();
    var solutionsTop = document.getElementById("solutions").offsetTop;
    
    if (solutionsTop < triggleTop+30) {
        darkerToggle();
    } else {
        
    }
}


/****  THE IMAGE ON THE PHOENIX ONE IS DIFFERENT FOR DESKTOP  ***/ 
$(document).ready( function() {
        if (WidthWindow > SmallDevicesW) {
            document.getElementById("graph-radio").src ="img/08.png";
        }
});


/*********  VERTICAL MENU  *********/
$(document).ready( function() {
    $(document).scroll( function() {
        var triggleTop = $(document).scrollTop();
        var solutionsTop = document.getElementById("solutions").offsetTop;
        if (solutionsTop < triggleTop+150 && WidthWindow > 768) {
            $("#vertical-navigation").fadeIn(800);
        } else {
            $("#vertical-navigation").fadeOut(200);
        }
    });
});

        

/***   Dots and its labels  *****/
$(document).ready(function() {
    if(WidthWindow > 768) {        
        $("#vertical-navigation").mouseover( function() {
            $(".dot1").addClass("joined-dots");
            $(".dot2").addClass("joined-dots");
            $(".dot3").addClass("joined-dots");
            $(".dots-lables").addClass("show-dots");
            
        }).mouseout( function() {
            $(".dot1").removeClass("joined-dots");
            $(".dot2").removeClass("joined-dots");
            $(".dot3").removeClass("joined-dots");
            $(".dots-lables").removeClass("show-dots");
        });
        
        
        /****  show labels ***/
        $(".label1").mouseover( function() {
            $(".label1").append($("<p>Inicio</p>"))
        }).mouseout( function() {
            $(".label1").find("p:last").remove();
        });
        
        $(".label2").mouseover( function() {
            $(".label2").append($("<p>Phoenix One</p>"))
        }).mouseout( function() {
            $(".label2").find("p:last").remove();
        });
        
        $(".label3").mouseover( function() {
            $(".label3").append($("<p>Phoenix Quality</p>"))
        }).mouseout( function() {
            $(".label3").find("p:last").remove();
        });
        
        $(".label4").mouseover( function() {
            $(".label4").append($("<p>Dispositivos</p>"))
        }).mouseout( function() {
            $(".label4").find("p:last").remove();
        });
        
        $(".label5").mouseover( function() {
            $(".label5").append($("<p>Cabos</p>"))
        }).mouseout( function() {
            $(".label5").find("p:last").remove();
        });
        
        $(".label6").mouseover( function() {
            $(".label6").append($("<p>Sobre</p>"))
        }).mouseout( function() {
            $(".label6").find("p:last").remove();
        });
        
        $(".label7").mouseover( function() {
            $(".label7").append($("<p>Contato</p>"))
        }).mouseout( function() {
            $(".label7").find("p:last").remove();
        });
        
    }
});








//That function is going to call all other ones related to scroll event

$(document).ready(function(){
       $(window).scroll(function(){
           parallax();
           skillsBarsAnimation();
           showUpToggle();
           
           
           /**  DESKTOP JS **/
           goToTop();
           DeskToggle();
       }); 
});


function parallax(){ 
    var hWindow = $(window).scrollTop();
    $("#phoenix-one .colorful-ball").css("left", (-32+hWindow*0.028)+"%");
    $("#phoenix-one .colorful-ball").css("top", (90+hWindow*-0.015)+"%");
    
    //BALL 2
    $("#phoenix-one .colorful-ball2").css("left", (-32+hWindow*0.038)+"%");
    $("#phoenix-one .colorful-ball2").css("top", (180+hWindow*-0.05)+"%");
    
    //BALL 3
    $("#phoenix-one .colorful-ball3").css("left", (-12+hWindow*0.049)+"%");
    $("#phoenix-one .colorful-ball3").css("top", (84+hWindow*-0.02)+"%");

    //BALL 4
    $("#phoenix-one .colorful-ball4").css("left", (-22+hWindow*0.03)+"%");
    $("#phoenix-one .colorful-ball4").css("top", (90+hWindow*-0.037)+"%");
}

//Skills section animation ACCORDING TO THE USER SCROLLING EVENT
function skillsBarsAnimation(){
    var triggleTop = $(document).scrollTop();
    var pheonixQuality = document.querySelector("#phoenix-quality").offsetTop;
    
    //THE BARS TO ANIMATE
    var chartBar1 = document.getElementsByClassName("chart-bar")[0];
    var chartBar2 = document.getElementsByClassName("chart-bar")[1];
    var chartBar3 = document.getElementsByClassName("chart-bar")[2];
    var chartBar4 = document.getElementsByClassName("chart-bar")[3];
    var chartBar5 = document.getElementsByClassName("chart-bar")[4];
    var chartBar6 = document.getElementsByClassName("chart-bar")[5];
    var chartBar7 = document.getElementsByClassName("chart-bar")[6];
    var chartBar8 = document.getElementsByClassName("chart-bar")[7];
    
    if(pheonixQuality < triggleTop+200){
        chartBar1.style = "height: 76%";
        chartBar2.style = "height: 64%; background-color: #ec7c7c";
        chartBar3.style = "height: 88%";
        chartBar4.style = "height: 79%";
        chartBar5.style = "height: 95%";
        chartBar6.style = "height: 90%";
        chartBar7.style = "height: 86%";
        chartBar8.style = "height: 98%";
        //SHOW THE SECTION PHOENIX QUALITY
        $("#phoenix-quality").css("filter", "opacity(1)");
    } 
    else if(pheonixQuality+100 > triggleTop){
        chartBar1.style = "height: 25%";
        chartBar2.style = "height: 25%";
        chartBar3.style = "height: 25%";
        chartBar4.style = "height: 25%";
        chartBar5.style = "height: 25%";
        chartBar6.style = "height: 25%";
        chartBar7.style = "height: 25%";
        chartBar8.style = "height: 25%";
        $("#phoenix-quality").css("filter", "opacity(0)");
    }
}






/*********   PRODUCTS  *******/



/* BUTTON TO CHANGE THE INFO CONTENT OF EACH PRODUCT **/
$(document).ready( function() {
    $("#hardwareButton").click( function() {
        $("#devices .product-info-box .features-info").fadeOut(100); 
        $("#devices .product-info-box .hardware-info").fadeIn(800);
        
        $("#hardwareButton").css("color", "#7A8FC7");
        $("#featureButton").css("color", "#666");
    });
    $("#featureButton").click( function() {
        $("#devices .product-info-box .hardware-info").fadeOut(0); 
        $("#devices .product-info-box .features-info").fadeIn(800);
        
        $("#hardwareButton").css("color", "#666");
        $("#featureButton").css("color", "#7A8FC7");
   }); 
});













//MAKE THE TOGGLE DARKER AFTER GET INTO THE ABOUT PAGE
function darkerToggle(){
    var triggleTop = $(document).scrollTop();
    var aboutTop = document.getElementById("about").offsetTop;
    if (aboutTop < triggleTop+60) {
        
        /** FOR DESKTOP  ***/
        if (WidthWindow > SmallDevicesW) {
            $(toggleBtn).css("background-color", "#222");
            $(".logo img").fadeOut(400);
        } 
        /*** FOR MOBILE  ****/
        else {
            $(toggleBtn).css("background-color", "#000");
            $("#nav-toggle div").css("background-color", "#999");
            $("#nav-bar .navbar-links").css("background-color", "#000");
            $("#nav-bar .navbar-links a").css("color", "#999");
        }
    } else {
        /** FOR DESKTOP  ***/
        if (WidthWindow > SmallDevicesW) {
            $(toggleBtn).css("background-color", "#fff");
            $("#nav-toggle div").css("background-color", "#555");
            $(".logo img").fadeIn(400);
            
        }
        /*** FOR MOBILE  ****/
        else {
            $(toggleBtn).css("background-color", "#fff");
            $("#nav-toggle div").css("background-color", "#555");
            $("#nav-with-links").css("background-color", "#fff");
            $("#nav-with-links a").css("color", "#555");
        }
    }
}









/**  TOGGLE TO GO TO TOP **/
function goToTop() {
    var scrolled = $(document).scrollTop();
    if (scrolled > 400) {
        $(".toTop-toggle").fadeIn(700);
    } else {
        $(".toTop-toggle").fadeOut(200);
    }
}

//SMOOTH SCROLLING
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) 
    {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
      }
    }
});/**smooth  scrolling**/