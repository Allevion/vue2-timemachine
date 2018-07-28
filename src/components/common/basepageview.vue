<template>
  <div class="whole-page">
    <van-nav-bar
      class="nav-bar"
      v-if="showTitle"
      :title="title"
      :left-arrow="showBack"
      @click-left="$parent.leftClick()"
      @click-right="$parent.rightClick()">
      <slot name="title-bar-right" slot="right"/>
    </van-nav-bar>
    <div class="content-page">
      <slot/>
    </div>
  </div>

</template>

<script>
  export default {
    name: "basepageview",
    props: {
      title: {tpye:String,default:""},
      showTitle: {tpye:Boolean,default:true},
      showBack: {tpye:Boolean,default:true},
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
      // console.log(this.navData)
    },

    // beforeCreate() {
    //
    //   console.log("beforeCreate========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
    // created() {
    //
    //   console.log("created========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
    // beforeMount: function () {
    //   console.log("beforeMount========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
    // mounted: function () {
    //   console.log("mounted========")
    //   console.log(this.title)
    //   console.log(this.$el)
    // },
  }
</script>

<style lang="scss">
  .whole-page{
    height: 100%;
  }
  van-nav-bar{
    flex: 0 0 auto;
  }
  .content-page{
    flex: 1 0 auto;
  }
</style>
