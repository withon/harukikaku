/****************************************************
 * 首页
 ***************************************************/
/**
 * 聚焦栏和视频栏，首次加载时及页面大小调整时，更改样式
 */
$(window).on("load resize", function () {
  // 保持聚焦栏的大小与页面相同，使背景图片大小填充整个屏幕
  if ($(".spotlight").length) {
    $(".spotlight").each(function () {
      let $spotlight = $(this);
      $spotlight.find(".spotlight-holder").css({
        height: $(window).height() + "px",
      });
    });
  }
  // B站外链的高度设为宽度的0.7倍
  if ($("#bilibiliIframe").length) {
    $("#bilibiliIframe").css({
      height: $("#bilibiliIframe").width() * 0.7,
    });
  }
});
