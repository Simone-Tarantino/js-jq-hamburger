var hamburgerIco = $('i.fa-bars');
var visible = false;

hamburgerIco.click(
  function () {
    if (!visible) {
      $('.hamburger-menu').show();
      visible = true;
    }
  }
);

var hamburgerIcoClose = $('i.fa-times');
hamburgerIcoClose.click(
  function () {
    if (visible) {
      $('.hamburger-menu').hide();
      visible = false;
    }
  }
);
