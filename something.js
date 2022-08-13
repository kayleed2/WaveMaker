const dropMenu = function () {
  const dropDown = document.getElementById('dropdown');
  const burgerDiv = document.getElementById('drop')
  console.log(burgerDiv);
  if ($(dropDown).hasClass('no-display')) {
    $(dropDown).removeClass('no-display');
    $(burgerDiv).addClass('clicked');
  } else {
    $(dropDown).addClass('no-display');
    $(burgerDiv).removeClass('clicked');
  }
}

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
   
 
   $( "#shadow" ).hover(
   function() {
     $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
   }, function() {
     $(this).removeClass('shadow-lg');
   }
 );

  $( "#shadow1" ).hover(
  function() {
    $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
  }, function() {
    $(this).removeClass('shadow-lg');
  }
);

$( "#shadow2" ).hover(
  function() {
    $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
  }, function() {
    $(this).removeClass('shadow-lg');
  }
);


$( "#startbtn" ).hover(
  function() {
    $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
  }, function() {
    $(this).removeClass('shadow-lg');
  }
);
 });

