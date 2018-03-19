/**
 * 节流函数的简单实现
 * @param {function}  fn  实际需要调用的函数
 * @param {number}  delay  空闲时间，单位毫秒
 * @param {number}  atleast 每过一段时间至少执行一次的时间间隔，单位毫秒
 * @return {function}  返回给客户调用的函数
 */

function throttle(fn, delay, atleast) {
    let timeout = null, previous = null, result;

    return function () {
        let context = this, args = arguments;

        let now = Date.now();

        if (!previous) previous = now;

        if (now - previous > atleast) {
            result = fn.call(context, ...args, 'not timeout');
            previous = now;
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                result = fn.call(context, ...args, 'timeout');
                previous = null;
            }, delay);
        }

        return result;
    }
}

/**
 * undersource实现的节流函数
 */

function throttle_undersource (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
