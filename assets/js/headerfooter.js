/****************************************************
 * 头部导航栏header，底部底栏footer
 ***************************************************/
/**
 * 引入公共header和footer
 */
$(function () {
  $(".headerpage").load("./header.html");
  $(".footerpage").load("./footer.html");
});
/**
 * 更改header样式，滚轮事件监听
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
