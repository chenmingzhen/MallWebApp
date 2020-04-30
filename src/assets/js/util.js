// 函数节流
export const debounce = (func, delay = 200) => {
  let timer = null;
  return function (...args) { // ...args
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      // func();
      // console.log(this);
      // 将func的指向对象从window指向到vue组件 search-box
      func.apply(this, args);
    }, delay);
  };
};
