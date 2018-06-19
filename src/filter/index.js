import Vue from 'vue';
import numeral from 'numeral';
import moment from 'dayjs'

Vue.filter('strToArr', function (value) {
  if (!value) {
    return '';
  } else {
    return value.split(',');
  }
})
// 数字格式化
Vue.filter('number', function (value, format = '0.00') {
  return numeral(value).format(format);
})

Vue.filter('money', function (value, format = '0,0.00') {
  return numeral(value).format(format)
})

// 日期格式化 2017-12-28 15:02:50 => 2017.12.28
Vue.filter('date', function (value, format) {
  if (!value) {
    return '';
  } else {
    return value.split(' ')[0].replace(/-/g, format || '.');
  }
})

// 日期格式化 2017-12-28 15:02:50 => 2017.12.28 15:02:50
Vue.filter('dateTime', function (value, format) {
  if (!value) {
    return '';
  } else {
    return value.split(' ')[0].replace(/-/g, format || '.') + ' ' + value.split(' ')[1];
  }
})

Vue.filter('timeUnixFormat', function (value, format) {
  return value ? moment.unix(value).format(format || 'YYYY-MM-DD HH:mm:ss') : '';
})

//银行卡脱敏
Vue.filter('convertCardNo', function (value) {
  if (value && new RegExp(/^(\d{12}|\d{16,22})$/).test(value)) {
    return ' **** ***** **** ' + value.substring(value.length - 4, value.length);
  }
  return value;
})

// {{item.TurnoverTime|tradeClientTime(0)}}
// 2018-01-12 15:54:21 =>2018-01-12  or  =>15:54:21
Vue.filter('timePart', function (value, part) {
  if (!value) {
    return '-';
  } else {
    part = part || 0;
    return value.split(' ')[part]
  }
})

