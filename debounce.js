/**
 * 函数去抖的简单实现
 * @param {function}  fn  实际需要调用的函数
 * @param {number}  delay   空闲时间，单位毫秒
 * @return {function}  返回给客户调用的函数
 */

function debounce(fn, delay) {
    let timer;

    return function () {
        let context = this, args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

 /**
  * 手动实现undersource的源码
  * @param {function}  func  实际需要调用的函数
  * @param {number}  wait  空闲时间，单位毫秒
  * @param {boolean}  immediate  是否立即调用
  * @return {function}  返回给客户调用的函数
  */

function debounce_undesource(func, wait, immediate) {
    let timeout, context, args, timestamp, result;

    let later = function () {
        let last = Date.now() - timestamp;

        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }

    }

    return function () {
        context = this;
        args = arguments;

        timestamp = Date.now();

        let callNow = immediate && !timeout;

        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    }
}
