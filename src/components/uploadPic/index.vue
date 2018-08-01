<template>
  <div>
    <van-uploader ref="selectPhoto" :after-read="onSelect"></van-uploader>
    <van-uploader ref="takePhoto" :after-read="onTake" capture="camera" ></van-uploader>
    <!--<input ref="takePhoto" type="file"  accept="image/*" capture="camera" size="30">-->
    <van-actionsheet v-model="show" :actions="actions">
    </van-actionsheet>
  </div>
</template>

<script>
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
        this.show = val
      },
      show(val){
        this.$emit('input',val)
      }
    },
    methods:{
      takePhoto(){
        this.$refs.takePhoto.$el.children[0].click()
      },
      selectPhoto(){
        this.$refs.selectPhoto.$el.children[0].click()
      },
      onSelect(file){
        alert(file)
        this.$emit('input',false)
        this.$log.info(file)
      },
      onTake(file){
        alert(file)
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
