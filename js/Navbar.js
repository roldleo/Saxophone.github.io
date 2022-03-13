function navbarScroll() {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#navbar").addClass("navbar-bg-scroll");
      } else {
        $("#navbar").removeClass("navbar-bg-scroll");
      }
    });
  });
}

navbarScroll();
