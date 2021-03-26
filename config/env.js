let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
  baseUrl = '/dev';
  imgBaseUrl = '/img/';

} else if (process.env.NODE_ENV == 'production') {
  baseUrl = '/api';
  imgBaseUrl = '//elm.cangdu.org/img/';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
};