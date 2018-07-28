<template>
  <van-button class="get-code" type="primary" size="small" :disabled="disabled" @click="onclick">{{text}}</van-button>
</template>

<script>
  export default {
    name: "getCode",
    data(){
      return {
        text:'发送短信',
        disabled:false,
        timer:null,
        totalCount:60
      }
    },
    methods:{
      onclick(){
        this.disabled = true
        if (!this.timer) {
          this.$emit('getCode')
          let count = this.totalCount
          this.updateText(count)
          let that = this
          this.timer = setInterval(() => {
            if (count > 0 && count <= this.totalCount) {
              count--;
            } else {
              clearInterval(this.timer);
              this.timer = null;
            }
            that.updateText(count)
          }, 1000)
        }
      },
      updateText(count){
        if(count >0){
          this.disabled = true
          this.text = "倒计"+count+"秒"
        }else {
          this.text = "发送短信"
          this.disabled = false

        }
      }

    }
  }
</script>

<style scoped lang="scss">
  .get-code{
    /*width: 100%;*/
  }
</style>
