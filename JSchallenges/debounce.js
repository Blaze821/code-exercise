/**
 * @name 防抖
 * @description 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 思路：
 * 每次触发事件时都取消之前的延时调用方法
 */
function debounce(fn){
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function() {
        clearTimeout(timeout);  // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => fn.apply(this, arguments),500) // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
    }
}

/**
 * @name Test
 */
function sayHi() {
    console.log('防抖成功~');
}