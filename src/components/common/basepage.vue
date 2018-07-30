<template>

</template>

<script>
  import {Toast} from 'vant'

  export default {
    name: "basepage",
    data() {
      return {
        from: null,
        needLogin: false,
        loading: false,
        pageStatus: "init",
        responseData: {}
      }
    },
    methods: {
      initData: function () {
        // console.log("base:initData" + this.title)
      },
      leftClick() {
        this.goback();
      },
      rightClick() {

      },
      goback() {
          this.$router.go(-1)
      },
      isLogin() {
        if (this.$store.state.token) {
          return true
        } else {
          return false
        }
      },
      goLogin(returnUrl,forceLogin){
        if (forceLogin){
          this.$router.replace({path:"/login",query:{returnUrl:returnUrl}})
        } else {
          this.$router.push({path:"/login",query:{returnUrl:returnUrl}})
        }
      },
      logout(returnLogin = false) {
        this.$store.dispatch("UserLogout");
        if(returnLogin){
          goLogin();
        }else {
          this.$router.push("/")
        }
      },
      showLoading() {
        Toast.loading({
            duration: 0,
            mask: true
          }
        )
      },
      closeLoading() {
        Toast.clear();
      }
    },
    computed: {},
    created() {
      this.initData();
    },
    mounted: function () {
      this.$log.debug('base mounted')
      if (this.needLogin && !this.isLogin()) {
        this.goLogin(this.$route.fullPath,true)
      }else {
      }
    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      // console.log("enter："+from.path+to.path)
      next(vm => {
        //因为当钩子执行前，组件实例还没被创建
        // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
        vm.from = from
      });
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      // console.log("update："+from.path+to.path)
      next();
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      // console.log("leave:"+from.path+to.path)
      next();
    },

    beforeCreate() {
      this.$log.debug('beforeCreate')
    },
    beforeMount() {
      this.$log.debug('beforeMount')
    },
  }
</script>
