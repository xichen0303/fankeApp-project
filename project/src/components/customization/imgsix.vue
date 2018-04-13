<template>
  <div class="topiclist">
    <div v-for="item in piclist" class="topic">
      <a href="">
        <img v-lazy="item.src" alt="">
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'imgsix',
  props:{
      "piclist":{
        type: Array,
        required: true
      }
  },
  data () {
    return {
      msg: ''
    }
  }
}

</script>
<style scoped>
body,div,a,span,ul,li,h1,h2,h3,h4,h5,h6{margin: 0;padding: 0;}
img{border: 0;width: 100%;display: block;}
html{font-size: 20px;}
a{text-decoration: none;}
ul,li,ol{list-style: none;}
/* ========================== */
.topiclist{
  width: 100%;
  overflow: hidden;
  font-size: 1.5em;
  color: #4c4c4c;
}
.topic{
  width: 50%;
  float: left;
  padding-top: 2px;
  text-align: center;
}
</style>
