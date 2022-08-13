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

