<template>
  <div class="comment content">
    <van-row type="flex" class="comment-title">
      <van-col class="comment-head-content center-horizontal-forchild" span="5">
        <img class="comment-img-head"
             :src="data.user.headimg"/>
      </van-col>
      <van-col class="text-title " span="20">
        <van-row class="comment-user-block text-title center-vertical-forchild" type="flex" justify="space-between">
          <van-col span="18">
            <div >
              <div class="comment-user ">{{data.user.name}}</div>
              <div class="comment-time ">{{data.createTime}}</div>
            </div>
          </van-col>
          <van-col span="6">
            <div class="comment-like text-primary center-vertical-forchild">
              <van-icon name="like"/>
              <span style="margin-left: 5px">{{data.like}}</span>
            </div>
          </van-col>
        </van-row>
        <div class="comment-content text-primary">{{data.content}}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {CommentBean} from "../../model/models";

  export default {
    name: "comment",
    data() {
      return {}
    },
    props: {
      data:{
        type:Object,
        default(){
          return new CommentBean();
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  .comment {
    padding: 10px 0px 10px 0px;
    &-title {

    }
    &-like {
      float: right;
      margin-right: 0px;
    }
    &-user-block {
      height: 60px;
    }
    &-head-content {

    }
    &-content{
      word-break:break-all;
    }
    &-img-head {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
</style>
