/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  "use strict";

  // Sticky Menu
  $(window).scroll(function () {
    if ($(".navigation").offset().top > 100) {
      $(".navigation").addClass("nav-bg");
    } else {
      $(".navigation").removeClass("nav-bg");
    }
  });

  // Background-images
  $("[data-background]").each(function () {
    $(this).css({
      "background-image": "url(" + $(this).data("background") + ")",
    });
  });

  // background color
  $("[data-color]").each(function () {
    $(this).css({
      "background-color": $(this).data("color"),
    });
  });

  // progress bar
  $("[data-progress]").each(function () {
    $(this).css({
      bottom: $(this).data("progress"),
    });
  });

  /* ########################################### hero parallax ############################################## */
  window.onload = function () {
    var parallaxBox = document.getElementById("parallax");
    var /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
      c2left = document.getElementById("l2").offsetLeft,
      c2top = document.getElementById("l2").offsetTop,
      c3left = document.getElementById("l3").offsetLeft,
      c3top = document.getElementById("l3").offsetTop,
      c4left = document.getElementById("l4").offsetLeft,
      c4top = document.getElementById("l4").offsetTop,
      c5left = document.getElementById("l5").offsetLeft,
      c5top = document.getElementById("l5").offsetTop,
      c6left = document.getElementById("l6").offsetLeft,
      c6top = document.getElementById("l6").offsetTop,
      c7left = document.getElementById("l7").offsetLeft,
      c7top = document.getElementById("l7").offsetTop,
      c8left = document.getElementById("l8").offsetLeft,
      c8top = document.getElementById("l8").offsetTop,
      c9left = document.getElementById("l9").offsetLeft,
      c9top = document.getElementById("l9").offsetTop;

    parallaxBox.onmousemove = function (event) {
      event = event || window.event;
      var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;

      /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
      mouseParallax("l2", c2left, c2top, x, y, 25);
      mouseParallax("l3", c3left, c3top, x, y, 20);
      mouseParallax("l4", c4left, c4top, x, y, 35);
      mouseParallax("l5", c5left, c5top, x, y, 30);
      mouseParallax("l6", c6left, c6top, x, y, 45);
      mouseParallax("l7", c7left, c7top, x, y, 30);
      mouseParallax("l8", c8left, c8top, x, y, 25);
      mouseParallax("l9", c9left, c9top, x, y, 40);
    };
  };

  function mouseParallax(id, left, top, mouseX, mouseY, speed) {
    var obj = document.getElementById(id);
    var parentObj = obj.parentNode,
      containerWidth = parseInt(parentObj.offsetWidth),
      containerHeight = parseInt(parentObj.offsetHeight);
    obj.style.left =
      left -
      ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
        speed +
      "px";
    obj.style.top =
      top -
      ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
        speed +
      "px";
  }
  /* ########################################### /hero parallax ############################################## */

  // testimonial-slider
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });

  // clients logo slider
  $(".client-logo-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Shuffle js filter and masonry
  var Shuffle = window.Shuffle;
  var jQuery = window.jQuery;

  var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
    itemSelector: ".shuffle-item",
    buffer: 1,
  });

  jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
    var input = evt.currentTarget;
    if (input.checked) {
      myShuffle.filter(input.value);
    }
  });
})(jQuery);

var flag=0;

function validateForm(e) {
  let name = document.forms["myform"]["fname"].value;
  if (name == "") {
    document.getElementById("error").innerHTML = "invalid entry";
    flag=1
    event.preventDefault();

    name = document.forms["myform"]["fname"].value = "";
  }

  let message = document.forms["myform"]["message"].value;

  if (message == "") {

    document.getElementById("m-error").innerHTML = "invalid entry";
    flag = 1;
    event.preventDefault();

    message = document.forms["myform"]["message"].value = "";
  }

  let email = document.forms["myform"]["email"].value;
  let regx = /^([a-zA-Z)0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})()$/;
  if (regx.test(email) !== true) {
    document.getElementById("e-error").innerHTML="invalid entry";
    flag=1;
    event.preventDefault();

    email = document.forms["myform"]["email"].value = "";
    
  }



}


 
$("#submit-form").submit((e) => {
  
    
    e.preventDefault();

  if (flag === 0) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyhTIYCIiS1m-r4K6BE8kM-mXwWCuXfqYavSMH1hHfj7GJqv0f8wtK_salZfNeZ28oVsw/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error");
      },
    }
    
    );
  }else{
    flag = 0;
  }

  });

