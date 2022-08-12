const dropMenu = function () {
  const dropDown = document.getElementById('dropdown');
  const burgerDiv = document.getElementById('drop')
  console.log(burgerDiv);
  if ($(dropDown).hasClass('invisible')) {
    $(dropDown).removeClass('invisible');
    $(burgerDiv).addClass('clicked');
  } else {
    $(dropDown).addClass('invisible');
    $(burgerDiv).removeClass('clicked');
  }
}

