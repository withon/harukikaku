/****************************************************
 * 全局变量
 ***************************************************/
let G_IF_TOP = true; // 全局-是否在顶部

/****************************************************
 * 公共方法
 ***************************************************/
/*
  延时执行函数
  @param fn function
  @param wait number
  @return function
*/
function debounce(fn, wait) {
  var timeout = null;
  return function() {
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
  }
}
/*
  节流函数
  @param fn function
  @param wait number
  @param maxTimeLong number
  @return function
*/
function throttling(fn, wait, maxTimelong) {
  var timeout = null,
    startTime = Date.parse(new Date());

  return function () {
    if (timeout !== null) clearTimeout(timeout);
    var curTime = Date.parse(new Date());
    if (curTime - startTime >= maxTimelong) {
      fn();
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, wait);
    }
  };
}

/****************************************************
 * 其他
 ***************************************************/
/**
 * 首次加载时及页面大小调整时，更改样式
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

/**
 * 滚轮事件监听，更改样式
 */
function changeTopbarBg() {
  let scrollTop = $(window).scrollTop();
  let ifTop = scrollTop < 1;
  if (ifTop != G_IF_TOP) {
    G_IF_TOP = ifTop;
    if (ifTop) {
      // 滚动条在顶部时
      $("#topbar").animate({ backgroundColor: "rgba(0, 0, 0, 0.4)" }, 1000);
    } else {
      // 滚动条不在顶部时
      $("#topbar").animate({ backgroundColor: "rgba(0, 0, 0, 1)" }, 1000);
    }
  }
}
$(window).scroll(throttling(changeTopbarBg, 200, 1000));
