export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USERINFO = 'UPDATE_USERINFO';
//关于token的存放位置
//1.只用vuex存储：刷新页面vuex重新初始化，token消失导致需要重新登录
//2.window.sessionStorage: 初始化的时候用sessionStorage来赋值，刷新页面重新初始化，但因为sessionStorage里面存有token有值，
//那么state.token就有值了,vue-router就不会拦截，则无需重新登录。（这个demo用的是这种）
//3.window.localStorage: 初始化的时候用localStorage来赋值，这种情况跟sessionStorage差不多。后台配合给长时间有效的token比较好,
//如果token的有效期比较短，直接有sessionStorage比较好。

const mutations = {
  [LOGIN]: (state, userinfo) => {
    state.userinfo = userinfo;
    state.token = userinfo.access_token;
    state.tokenExpired = userinfo.token_expired_time;
    window.sessionStorage.setItem('token', userinfo.access_token);
  },
  [LOGOUT]: (state) => {
    //登出的时候要清除token
    state.token = null;
    state.userinfo = null;
    window.sessionStorage.removeItem('token');
  },
  [UPDATE_USERINFO]: (state, data) => {
    state.userinfo = data;
    // window.sessionStorage.setItem('userinfo', data);
  }
};

export default mutations;
