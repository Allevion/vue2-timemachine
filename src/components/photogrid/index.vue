<template>
  <div v-if="photos" class="photogrid">
    <van-row :gutter="gutter">
      <van-col v-for="(img,index) in photos" span="8" >
        <div class="photogrid-item-container" :style="style(index)">
          <img class="photogrid-item-img" :src="img" @click="showImg(index)"/>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {ImagePreview} from 'vant';
  export default {
    name: "photogrid",
    props: {
      photos: {type: Array},
    },
    data() {
      return {
        gutter: 5
      }
    },
    methods: {
      showImg(index) {
        ImagePreview(this.photos, index)
      },
      gutterVertical(index) {
        return index > 2 ?this.gutter:0;
      },
      style(index) {
        const padding = `${this.gutter}px`;
        return this.gutterVertical(index) ? {'margin-top': padding} : {};
      }
    },
    computed: {
    },

  }
</script>

<style lang="scss">

  .photogrid {
    padding-top: 6px;
    padding-bottom: 6px;
    &-item {
      &-container {
        width: 100%;
        height: 0px;
        padding-bottom: 100%;
        overflow: hidden;
        position: relative;
      }
      &-img {

        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
