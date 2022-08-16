$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
   
 showWelcomeMessageOrForm();
   
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

const dropMenu = function () {
  const dropDown = document.getElementById('dropdown');
  const burgerDiv = document.getElementById('drop')
  const burgerSpan = document.getElementById('spanburger');
  console.log(burgerDiv);
  if ($(dropDown).hasClass('no-display')) {
    $(dropDown).removeClass('no-display');
    $(burgerDiv).addClass('clicked');
    $(burgerSpan).removeClass('ml-burger');
  } else {
    $(dropDown).addClass('no-display');
    $(burgerDiv).removeClass('clicked');
    $(burgerSpan).addClass('ml-burger');
  }
}

const saveFile = function () {
  let email = $('#email-input').val();
  let firstName = $('#firstname-input').val();
  let lastName = $('#lastname-input').val();
  let package = $('#pack-select').val();
  var selected = [];
  $('input:checked').each(function() {
    selected.push($(this).attr('name'));
});
let user = {}
user["email"] = email;
user["firstName"] = firstName;
user["lastName"] = lastName;
user["package"] = package;
user["platforms"] = selected;
localStorage.setItem('User', user);
Cookies.set('firstname', firstName, { expires: 14, path: '' });
Cookies.set('email', email, { expires: 14, path: '' });
Cookies.set('lastname', lastName, { expires: 14, path: '' });
Cookies.set('package', package, { expires: 14, path: '' });
Cookies.set('platforms', platforms, { expires: 14, path: '' });
}

function showWelcomeMessageOrForm() {
  if (Cookies.get('firstname') == null ) {
    showForm();
  } else {
    hideForm();
  }
}

function hideForm() {
  let formdiv = document.getElementById('cont');
  formdiv.style.display = 'none';
  $('#signup').append(`<div class="p-5 mt-4 mb-4 d-flex flex-column justify-content-center align-items-center" id="members">
  <h1 class="text-white text-center"><br>You are all signed up!</h1>
  <a href="#"><button type="button" class="btn btn-secondary m-3 font-weight-bold border-0" style="background-color: var(--accent-lightblue);" id="member">Member Login</button></a>
  </div>`);


}

function showForm() {
  let formdiv = document.getElementById('cont');
  formdiv.style.display = 'block';
  if (document.getElementById('member')) {
      let it = document.getElementById('member');
      it.style.display = 'none';
      formdiv.style.display = 'block';
  }
}
