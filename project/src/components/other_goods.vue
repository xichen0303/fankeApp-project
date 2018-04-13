<template>
  <div class="other_goods">
    <!-- 头部组件 -->
    <other_goods_top/>
    <!-- banner组建处 -->

    <!-- 内容组建部 -->
    <other_goods_content/>

  </div>
</template>

<script>
  // 头部引入
  import other_goods_top from '@/components/other_goods_top'
// banner轮播引入
   /*import Home_slideshow from '@/components/Home_slideshow'*/
// 内容引入
   import other_goods_content from '@/components/other_goods_content'
export default {
  name: 'other_goods',
   components:{
      other_goods_top,
      other_goods_content/*,
      Home_slideshow*/
  },
  data () {
    return {
      message: '杂货'
    }
  }
}
</script>
<style src="../../static//css/public.css"></style>
<style src="../../static/css/other_goods.css"></style>
