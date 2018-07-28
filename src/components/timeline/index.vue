<template>
  <div class="timeline content padding-horizontal">
    <div class="timeline-head ">
      <img class="timeline-head-img"
           src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=747248536,1655132067&fm=85&s=35B73F9E4501494D186D727E0300807B"/>
      <div style="flex-direction: column">
        <div><span class="timeline-author">{{data.user.name}}</span></div>
        <div><span class="timeline-time text-auxiliary">{{data.createTime}}</span></div>
      </div>
    </div>
    <!--内容-->
    <div class="timeline-content margin-vertical-small">
      <span class="timeline-content-text">{{data.content}}</span>
      <photogrid :photos="data.imgs"></photogrid>
    </div>
    <!--热评-->
    <div class="timeline-comment">
    </div>
    <!--操作-->
    <div class="timeline-operation margin-vertical-small">
      <van-row class="timeline-operation--left text-auxiliary" type="flex">
        <van-col class="timeline-operation-item" span="4">
          <van-icon name="like-o"/>
          <span style="padding-left: 2px">{{data.like}}</span>
        </van-col>
        <van-col class="timeline-operation-item" span="4">
          <van-icon name="chat"/>
          <span style="padding-left: 2px">{{data.comment}}</span>
        </van-col>
        <van-col class="timeline-operation-item" span="4">
          <van-icon name="share"/>
          <span style="padding-left: 2px">{{data.share}}</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import Photogrid from "../photogrid/index";
  import { TimelineBean, UserBean} from "../../model/models";
  export default {
    name: "timeline",
    components: {Photogrid},
    props: {
      data:{
        type:Object,
        default(){
          return new TimelineBean();
        }
      }
    },
    data() {
      return {}
    },
    methods: {
    },
    computed:{
    }
  }
</script>

<style scoped lang="scss">
  .timeline {

    &-head {
      display: flex;
      align-items: center;
    }
    &-head-img {
      height: 35px;
      width: 35px;
      margin-right: 5px;
      display: flex;
      flex-direction: column;
    }
    &-author {
      color: #108ee9;
    }
    &-operation {
      &--left {
      }
      &-item {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
