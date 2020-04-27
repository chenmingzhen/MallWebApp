import axios from 'axios';
import {HOME_RECOMMEND_PAGE_SIZE, jsonpOptions, SUCC_CODE, TIMEOUT} from './config';
import jsonp from '../assets/js/jsonp';

// 打乱数组顺序
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }

  return arr;
};

// 获取幻灯片数据--ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      console.log('成功获取到数据！');
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]];
      // filter 数组筛选函数 根据提供的函数的结果值 true则取 false则不取
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      if (sliders.length === 0) {
        sliders = slider;
      }
      /* 往下一个then传递参数 这里就是往故意延迟传输参数 */
      return sliders;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
    return [{
      linkUrl: 'https://www.imooc.com',
      picUrl: require('assets/img/404.png')
    }];
  });/* .then(data => {
    /!* 制造延迟 *!/
    /!* 往下一个then传递参数 这里目前就是往home中的slider传递参数 *!/
    /!* 因为这里set timeout也是异步 所以使用promise *!/
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(data);
    }, 1500));
  }); */
};
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return jsonp(url, params, jsonpOptions).then(data => {
    if (data.code === '200') {
      return data;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  });/* .then(data => {
    /!* 制作延迟效果 *!/
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }); */
};
