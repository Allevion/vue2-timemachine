<template>
  <div>
    <van-uploader ref="selectPhoto" :after-read="onSelect"></van-uploader>
    <van-uploader ref="takePhoto" :after-read="onSelect" capture="camera" ></van-uploader>
    <!--<input ref="takePhoto" type="file"  accept="image/*" capture="camera" size="30">-->
    <van-actionsheet v-model="show" :actions="actions">
    </van-actionsheet>
  </div>
</template>

<script>
  import axios from 'axios'
  import * as qiniu from 'qiniu-js'
  import http from "../../utils/http";
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
        token:'',
        config : {
          useCdnDomain: true,
          region: qiniu.region.z0
        },
        putExtra : {
          fname: "",
          params: {},
          mimeType: null
        }
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
    created(){
      axios.get(process.env.IMG_BASEURL+'/uptoken')
        .then(res=>{
          this.$log.info(res)
          this.token = res.uptoken
        })
      // http.request({
      //   url:"/uptoken",
      //   method:'GET',
      //   baseURL:'/imgapi'
      // }).then(res=>{
      //   this.$log.info(res)
      //   this.token = res.uptoken
      // })
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
        let observable = qiniu.upload(file, null, this.token, this.putExtra, this.config);
        var observer = {
          next(res){
            // ...
          },
          error(err){
            // ...
          },
          complete(res){
            this.$log.info(res)
          }
        }
        observable.subscribe(observer)
      },
      // onTake(file){
      //   alert(file)
      // },

    }
  }
</script>

<style scoped lang="scss">

</style>
