$(document).ready(function(){
	// console.log('hi i am working');

   // Start Header Section
   // Start Banner

    // $(".carousel").carousel({
    // 	interval:1000;
    // })

   // End Banner
  //  End Header Section

  // Start Info Section

  $(window).scroll(function(){
  	let getscrollpoint = $(this).scrollTop();
  	//console.log(getscrollpoint);

  	if(getscrollpoint >= 380){
  		$(".infotexts").addClass("fromlefts");
  		$(".infopictures").addClass("fromrights")
  	}else{
  		$(".infotexts").removeClass("fromlefts");
  		$(".infopictures").removeClass("fromrights")
  	}
  })

 // End Info Section

 // Start ADV Section

   $("#videos").click(function(){
    // var getmodal = $("#viedomodal")   // ezzz way


    var getmodal = $(this).data("bs-target");
    var getviedosrc = $(this).data("video");
    var viedurlwithauto = getviedosrc+"?autoplay=1";  //"?autoplay=1"  i was looking for url link
    $(getmodal + " iframe").attr("src",viedurlwithauto);   // we can call very easy way bro relax its just call class to tag

    $(getmodal + " button.btn-close").click(function(){
         $(getmodal + " iframe").attr("src",getviedosrc);
    });

    $(getmodal).click('hidden.bs.modal',function(){      //bootstrap docum htal mar shi dal
         $(getmodal +" iframe").attr("src",getviedosrc);
    });
   })
 // End ADV Section

 // Start Premises Section
     
     $("#lightslider").lightSlider({
         item:4,
        loop:true,
        slideMove:1,
        speed:600,
        // auto:true,
     }).play();

 // End Premises Section

 // Start Pricing Section
      
      $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2587){
            $(".cardone").addClass("movelefts");
            $(".cardtwo").addClass("movebottms");
            $(".cardthree").addClass("moverights");
        }else{
             $(".cardone").removeClass("movelefts");
            $(".cardtwo").removeClass("movebottms");
            $(".cardthree").removeClass("moverights");
        }
      })

  // End Pricing Section


  // Start Join Us Section
    
    $("#accordion").accordion();

  // End Join Us Section



  // Start Footer Section
     $("#getyear").text(new Date().getUTCFullYear());
  // End Footer Section


  // Start Progress 
    $(window).scroll(function(){
       var getprogress = $("#progress");
       var getprogressvalue = $("#progressvalues");
       var getscrolltop = $(this).scrollTop();
       //console.log(getscrolltop);

         // st * 100 / (pjheight - cliheight) *** st is mean scroll top
       
 // By Jquery
          // var getscrollheight = $(document).height();     // to find out the whole project height
         // console.log(getscrollheight);
        // var getclientheight = $(window).height();    // to find out client height
       //  console.log(getclientheight);

        // var calculateheight = getscrollheight - getclientheight;
       // var getfinalheight = Math.round(getscrolltop * 100 / calculateheight);   // Math.round ka percent twe ko pyoke dar
       //console.log(getfinalheight);

       // getprogressvalue.text(`${getfinalheight}%`)

      // getprogress.css({
     // "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
     // })


// By Javascript

              var getscrollheight = document.documentElement.scrollHeight;   //whole height
             // console.log(getscrollheight);
              var getclientheight = document.documentElement.clientHeight;
             // console.log(getclientheight); 
             var calcheight = getscrollheight - getclientheight;
             var getfinalheight = Math.round(getscrolltop * 100 / calcheight);

       getprogressvalue.text(`${getfinalheight}%`)
       getprogress.css({
       "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
      }) 
     
    })
     // End Progress 
})