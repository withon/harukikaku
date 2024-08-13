$(window).on("load resize", function () {
  // Background image holder - Static hero with fullscreen autosize
  if ($(".spotlight").length) {
    $(".spotlight").each(function () {
      var $this = $(this);
      $this.find(".spotlight-holder").css({
        height: $(window).height() + "px",
      });
    });
  }
  if ($("#bilibiliIframe")) {
    $("#bilibiliIframe").css({
      height: $("#bilibiliIframe").width() * 0.7,
    });
  }
});
