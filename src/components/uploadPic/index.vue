<template>
  <div>
    <van-uploader ref="selectPhoto" :after-read="onSelect"></van-uploader>
    <van-actionsheet v-model="show" :actions="actions">
    </van-actionsheet>
  </div>
</template>

<script>
  import {Popup} from 'vant'
  export default {
    name: "UploadPic",
    props:{
      value:Boolean,
    },
    data(){
      return {
        show:this.value,
        actions:[
          {
            name:'拍照',
            callback:this.takePhoto,
          },
          {
            name:'选择照片',
            callback:this.selectPhoto,
          },
        ],
      }
    },
    watch:{
      value(val){
        this.show = val;
      }
    },
    methods:{
      takePhoto(){

      },
      selectPhoto(){
        this.$refs.selectPhoto.$el.children[0].click()
      },
      onSelect(file){
        this.value = false
        this.show = false
        this.$log.info(file)
      },
      onTake(){

      },
    }
  }
</script>

<style scoped lang="scss">

</style>
