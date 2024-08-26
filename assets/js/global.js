/****************************************************
 * 全局变量
 ***************************************************/
let G_IF_TOP = true; // 全局-是否在顶部

/****************************************************
 * 全局公共方法
 ***************************************************/
/*
  延时执行函数
  @param fn function
  @param wait number
  @return function
*/
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
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
